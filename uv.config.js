
self.__uv$config = {
    prefix: '/service/',

    /* Bare server URL */ 
    bare: 'https://bare.electrial.site',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://raw.githack.com/hankypoo7/ccuonefile/main/uv.handler.js',
    client: 'https://raw.githack.com/hankypoo7/ccuonefile/main/uv.client.js',
    bundle: 'https://raw.githack.com/hankypoo7/ccuonefile/main/uv-bundle.js',
    config: 'https://raw.githack.com/hankypoo7/ccuonefile/main/uv.config.js',
    sw: 'https://raw.githack.com/hankypoo7/ccuonefile/main/uv.sw.js',
};
