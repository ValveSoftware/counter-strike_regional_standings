### Roster Details<br />
Team Name: Nexus<br />
Roster: 7kick, BTN, Ciocardau, ragga, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  790.7<br />
<br />
Final Rank Value (790.7) = Starting Rank Value (858.5) + Head To Head Adjustments (-67.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.5
- 400 + ( ( 0.227 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 858.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      125 | 2024-07-20 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.82 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           60 |      168 | 2024-07-19 | PERA              | W   | 1.000      | 0.333        | 0.061 (0.020)    | 0.462 (0.154)    | 0 (0.000) |    24.27 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           59 |      209 | 2024-07-18 | TSM               | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.326 (0.109)    | 0 (0.000) |    25.11 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           58 |      225 | 2024-07-18 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -5.68 | 7kick, BTN, Ciocardau, Ed1m, ragga   |
|           57 |      302 | 2024-07-17 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -11.13 | 7kick, BTN, Ed1m, ragga, XELLOW      |
|           56 |      337 | 2024-07-16 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.27 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           55 |      396 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.333        | 0.048 (0.016)    | 0.769 (0.256)    | 0 (0.000) |    24.45 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           54 |      407 | 2024-07-14 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -9.98 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           53 |      427 | 2024-07-13 | Serbia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.72 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           52 |      468 | 2024-07-10 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -9.62 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           51 |      500 | 2024-07-09 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.13 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           50 |      738 | 2024-06-12 | Permitta          | L   | 0.920      | -            | -                | -                | -         |    -7.17 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |      763 | 2024-06-11 | FAVBET            | L   | 0.913      | -            | -                | -                | -         |   -11.12 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |      858 | 2024-06-09 | EYEBALLERS        | L   | 0.898      | -            | -                | -                | -         |    -8.06 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |      888 | 2024-06-08 | Enterprise        | L   | 0.894      | -            | -                | -                | -         |    -8.48 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           46 |      961 | 2024-06-07 | Astralis Talent   | W   | 0.886      | -            | -                | -                | 0 (0.000) |    14.85 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           45 |      971 | 2024-06-07 | 9INE              | L   | 0.885      | -            | -                | -                | -         |   -10.62 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           44 |      993 | 2024-06-06 | 3DMAX             | L   | 0.881      | -            | -                | -                | -         |    -2.48 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           43 |     1091 | 2024-06-05 | BLEED             | L   | 0.872      | -            | -                | -                | -         |    -1.63 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           42 |     1331 | 2024-05-27 | The Prodigies     | L   | 0.814      | -            | -                | -                | -         |   -20.14 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           41 |     1342 | 2024-05-27 | MOUZ NXT          | L   | 0.811      | -            | -                | -                | -         |    -4.59 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           40 |     1376 | 2024-05-25 | Permitta          | L   | 0.799      | -            | -                | -                | -         |    -9.25 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           39 |     1405 | 2024-05-23 | RUBY              | L   | 0.786      | -            | -                | -                | -         |    -6.79 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           38 |     1517 | 2024-05-20 | ALTERNATE aTTaX   | W   | 0.767      | 0.435        | 0.041 (0.014)    | 0.638 (0.213)    | 0 (0.000) |    16.29 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           37 |     1523 | 2024-05-20 | PERA              | L   | 0.766      | -            | -                | -                | -         |    -7.10 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           36 |     1620 | 2024-05-17 | Passion UA        | L   | 0.745      | -            | -                | -                | -         |    -5.55 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           35 |     1711 | 2024-05-15 | Space             | L   | 0.731      | -            | -                | -                | -         |    -9.88 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           34 |     1786 | 2024-05-13 | Sampi             | L   | 0.718      | -            | -                | -                | -         |    -7.58 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           33 |     1996 | 2024-05-03 | ENCE Academy      | L   | 0.651      | -            | -                | -                | -         |   -13.01 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     2041 | 2024-05-01 | Insilio           | L   | 0.639      | -            | -                | -                | -         |    -7.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     2073 | 2024-04-30 | fnatic            | L   | 0.631      | -            | -                | -                | -         |    -0.41 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     2078 | 2024-04-29 | Endpoint          | L   | 0.627      | -            | -                | -                | -         |    -8.44 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     2081 | 2024-04-29 | VP.Prodigy        | L   | 0.626      | -            | -                | -                | -         |    -9.70 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     2088 | 2024-04-29 | LEON              | W   | 0.625      | -            | -                | -                | 0 (0.000) |     5.75 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     2092 | 2024-04-29 | Enterprise        | W   | 0.624      | 0.384        | 0.050 (0.012)    | 0.646 (0.155)    | 0 (0.000) |    11.36 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     2109 | 2024-04-28 | brazylijski luz   | L   | 0.618      | -            | -                | -                | -         |    -9.69 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     2173 | 2024-04-25 | Metizport         | W   | 0.600      | 0.384        | 0.051 (0.012)    | 0.460 (0.106)    | 0 (0.000) |    12.68 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     2180 | 2024-04-25 | Grannys Knockers  | L   | 0.599      | -            | -                | -                | -         |   -11.65 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2202 | 2024-04-24 | AMKAL             | L   | 0.592      | -            | -                | -                | -         |    -3.71 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2223 | 2024-04-23 | Illuminar         | L   | 0.585      | -            | -                | -                | -         |   -15.66 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2236 | 2024-04-22 | Zero Tenacity     | L   | 0.578      | -            | -                | -                | -         |    -4.71 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2246 | 2024-04-21 | Young Ninjas      | W   | 0.574      | -            | -                | -                | -         |     7.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2249 | 2024-04-21 | PARIVISION        | L   | 0.573      | -            | -                | -                | -         |    -6.10 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2285 | 2024-04-20 | Permitta          | W   | 0.565      | 0.500        | -                | 0.790 (0.223)    | -         |    11.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     2354 | 2024-04-18 | Young Ninjas      | L   | 0.554      | -            | -                | -                | -         |   -10.70 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     2388 | 2024-04-18 | Enterprise        | L   | 0.552      | -            | -                | -                | -         |    -7.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     2585 | 2024-04-10 | B8                | W   | 0.499      | 0.384        | 0.206 (0.039)    | 0.933 (0.179)    | -         |    11.70 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     2728 | 2024-04-05 | SINNERS           | L   | 0.466      | -            | -                | -                | -         |    -3.80 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     2871 | 2024-04-01 | Sashi             | W   | 0.438      | 0.384        | 0.234 (0.039)    | 1.000 (0.168)    | -         |    11.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     2979 | 2024-03-25 | Sashi             | L   | 0.393      | -            | -                | -                | -         |    -2.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3240 | 2024-03-12 | Nemiga            | W   | 0.307      | 0.372        | 0.415 (0.047)    | 0.707 (0.081)    | -         |     8.47 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3262 | 2024-03-11 | RUBY              | W   | 0.300      | 0.372        | 0.122 (0.014)    | -                | -         |     6.09 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3301 | 2024-03-09 | INGLORIOUS        | W   | 0.287      | -            | -                | -                | -         |     1.42 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3327 | 2024-03-08 | FAVBET            | W   | 0.280      | -            | -                | -                | -         |     3.46 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3474 | 2024-03-03 | TSM               | L   | 0.246      | -            | -                | -                | -         |    -5.50 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3720 | 2024-02-20 | ex-Guild Eagles   | L   | 0.166      | -            | -                | -                | -         |    -2.70 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3742 | 2024-02-19 | Monte             | L   | 0.160      | -            | -                | -                | -         |    -1.21 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     3747 | 2024-02-19 | Astralis          | L   | 0.159      | -            | -                | -                | -         |    -0.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4047 | 2024-02-03 | 500               | L   | 0.053      | -            | -                | -                | -         |    -1.17 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4049 | 2024-02-03 | Jake Bube         | W   | 0.053      | -            | -                | -                | -         |     0.12 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            1 |     4058 | 2024-02-03 | North Macedonia   | L   | 0.052      | -            | -                | -                | -         |    -1.45 | BTN, ERSIN, ragga, s0und, XELLOW     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,837.65)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-05-02 |      0.647 | $1,000.00      | $646.62         |
| 2024-03-25 |      0.393 | $4,300.00      | $1,691.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
