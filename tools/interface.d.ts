
declare namespace EhTag {
    type Sha1Value = string;

    interface Signature {
        name: string;
        email: string;
        when: Date;
    }

    interface Commit {
        author: Signature;
        committer: Signature;
        sha: Sha1Value;
        message: string;
    }

    interface RepoInfo {
        repo: string;
        head: Commit;
        version: number;
        data: NamespaceInfo[];
    }

    interface RepoData<T extends TagType> extends RepoInfo {
        data: NamespaceData<T>[];
    }

    type NamespaceName =
        | 'rows'
        | 'reclass'
        | 'language'
        | 'parody'
        | 'character'
        | 'group'
        | 'artist'
        | 'male'
        | 'female'
        | 'misc';

    interface NamespaceInfo {
        count: number;
        namespace: NamespaceName;
        frontMatters: FrontMatters;
    }

    interface FrontMatters{
        key: NamespaceName;
        name: string;
        description: string;
        copyright?: string;
        rules?: string[];
    }

    interface NamespaceData<T extends TagType> extends NamespaceInfo {
        data: { [raw: string]: Tag<T> };
    }

    interface Tag<T extends TagType> {
        intro: CellType<T>;
        links: CellType<T>;
        name: CellType<T>;
    }

    type TagType = 'raw' | 'ast' | 'html' | 'text' | 'full';

    type CellType<T extends TagType>
        = T extends 'raw' ? string
        : T extends 'ast' ? Ast.Tree
        : T extends 'html' ? string
        : T extends 'text' ? string
        : T extends 'full' ? { raw: CellType<'raw'>, ast: CellType<'ast'>, html: CellType<'html'>, text: CellType<'text'>, }
        : never;

    namespace Ast {

        type Tree = ParaNode[];

        type NodeType = 'paragraph' | 'text' | 'br' | 'code' | 'image' | 'link' | 'emphasis' | 'strong';
        
        interface Node {
            type: NodeType;
        }
        interface ContainerNode extends Node {
            content: InlineNode[];
        }
        interface InlineNode extends Node {
            type: Exclude<NodeType, 'paragraph'>;
        }

        interface ParaNode extends ContainerNode {
            type: 'paragraph';
        }
        interface LeafNode extends InlineNode {
            type: 'text' | 'code' | 'br';
        }
        interface TextLeafNode extends LeafNode {
            type: 'text' | 'code';
            text: string;
        }
        interface TextNode extends TextLeafNode {
            type: 'text';
        }
        interface CodeNode extends TextLeafNode {
            type: 'code';
        }
        interface BreakNode extends LeafNode {
            type: 'br';
        }
        interface StylingNode extends InlineNode, ContainerNode {
            type: 'emphasis' | 'strong';
        }
        interface EmphasisNode extends StylingNode {
            type: 'emphasis';
        }
        interface StrongNode extends StylingNode {
            type: 'strong';
        }
        interface MediaNode extends InlineNode, ContainerNode {
            type: 'link' | 'image';
            title: string;
            url: string;
        }
        interface LinkNode extends MediaNode {
            type: 'link';
        }
        interface ImageNode extends MediaNode {
            type: 'image';
            nsfw: false | 'R18' | 'R18G';
        }
    }
}