
export namespace EhTag {
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

    type NamespaceName = 'rows'
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
        type Tree = ParaNode[]
        interface Node {
            type: string,
        }
        interface ContainerNode extends Node {
            content: InlineNode[],
        }
        interface InlineNode extends Node {
        }

        interface ParaNode extends ContainerNode {
            type: 'paragraph',
        }
        interface LeafNode extends InlineNode {
            text: string,
        }
        interface TextNode extends LeafNode {
            type: 'text',
        }
        interface CodeNode extends LeafNode {
            type: 'code'
        }
        interface BreakNode extends InlineNode {
            type: 'br',
        }
        interface EmphasisNode extends InlineNode, ContainerNode {
            type: 'emphasis',
        }
        interface StrongNode extends InlineNode, ContainerNode {
            type: 'strong',
        }
        interface MediaNode extends ContainerNode, InlineNode {
            title: string,
            url: string,
        }
        interface LinkNode extends MediaNode {
            type: 'link',
        }
        interface ImageNode extends MediaNode {
            type: 'image',
            nsfw: boolean,
        }
    }
}