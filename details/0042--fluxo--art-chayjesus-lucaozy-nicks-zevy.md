### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, chayJESUS, Lucaozy, nicks, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  1180.5<br />
<br />
Final Rank Value (1180.5) = Starting Rank Value (1058.3) + Head To Head Adjustments (122.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.324<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1058.3
- 400 + ( ( 0.324 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1058.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |       12 | 2024-06-16 | paiN           | W   | 1.000      | 0.450        | 0.492 (0.221)    | 0.775 (0.349)    | 0 (0.000) |    26.20 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           76 |       41 | 2024-06-15 | inSanitY       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.06 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           75 |       75 | 2024-06-14 | Sharks         | W   | 1.000      | 0.450        | 0.044 (0.020)    | 0.429 (0.193)    | 0 (0.000) |    13.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           74 |      287 | 2024-06-08 | KRÜ            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.67 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           73 |      365 | 2024-06-07 | Bounty Hunters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.52 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           72 |      428 | 2024-06-06 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.61 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           71 |      472 | 2024-06-05 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -3.67 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           70 |      522 | 2024-06-04 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -2.87 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           69 |      851 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -17.87 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           68 |      852 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -19.46 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           67 |      922 | 2024-05-20 | RED Canids     | W   | 1.000      | 0.450        | 0.115 (0.052)    | 0.693 (0.312)    | 0 (0.000) |    19.23 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           66 |      924 | 2024-05-20 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -11.98 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           65 |      982 | 2024-05-18 | 9z             | L   | 0.996      | -            | -                | -                | -         |    -3.25 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           64 |     1016 | 2024-05-17 | Case           | W   | 0.990      | 0.371        | -                | 0.579 (0.212)    | 0 (0.000) |     5.65 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           63 |     1049 | 2024-05-16 | RED Canids     | L   | 0.984      | -            | -                | -                | -         |   -14.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           62 |     1095 | 2024-05-15 | ex-2GAME       | W   | 0.977      | -            | -                | -                | 0 (0.000) |     2.25 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           61 |     1097 | 2024-05-15 | ex-2GAME       | W   | 0.977      | -            | -                | -                | 0 (0.000) |     2.31 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           60 |     1111 | 2024-05-15 | Imperial       | L   | 0.976      | -            | -                | -                | -         |    -4.62 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           59 |     1160 | 2024-05-14 | Sharks         | W   | 0.970      | -            | -                | -                | -         |     9.62 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           58 |     1173 | 2024-05-14 | ODDIK          | W   | 0.969      | 0.384        | -                | 0.558 (0.208)    | -         |     7.90 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           57 |     1191 | 2024-05-13 | Hype           | W   | 0.963      | -            | -                | -                | -         |     3.30 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           56 |     1220 | 2024-05-12 | Vikings KR     | W   | 0.955      | -            | -                | -                | -         |     2.97 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           55 |     1280 | 2024-05-09 | paiN           | W   | 0.938      | 0.450        | 0.492 (0.208)    | 0.775 (0.327)    | -         |    26.85 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           54 |     1286 | 2024-05-09 | paiN           | L   | 0.938      | -            | -                | -                | -         |    -2.41 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           53 |     1758 | 2024-04-18 | paiN           | L   | 0.798      | -            | -                | -                | -         |    -1.90 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           52 |     1763 | 2024-04-18 | Imperial       | L   | 0.797      | -            | -                | -                | -         |    -2.45 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           51 |     1810 | 2024-04-17 | ODDIK          | W   | 0.791      | -            | -                | -                | -         |     6.46 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           50 |     1820 | 2024-04-17 | Solid          | W   | 0.790      | -            | -                | -                | -         |     5.34 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           49 |     1850 | 2024-04-16 | Hype           | W   | 0.784      | -            | -                | -                | -         |     3.31 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           48 |     1910 | 2024-04-13 | Galorys        | L   | 0.762      | -            | -                | -                | -         |   -18.82 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           47 |     1975 | 2024-04-10 | Imperial       | W   | 0.744      | 0.450        | 0.406 (0.136)    | 0.694 (0.232)    | -         |    21.38 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           46 |     1979 | 2024-04-10 | Imperial       | L   | 0.744      | -            | -                | -                | -         |    -1.92 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           45 |     2029 | 2024-04-09 | ODDIK          | W   | 0.737      | 0.450        | -                | 0.558 (0.185)    | -         |     6.28 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           44 |     2034 | 2024-04-09 | ODDIK          | W   | 0.737      | 0.450        | -                | 0.558 (0.185)    | -         |     6.61 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           43 |     2070 | 2024-04-08 | ODDIK          | W   | 0.730      | -            | -                | -                | -         |     6.91 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           42 |     2119 | 2024-04-06 | BESTIA         | L   | 0.717      | -            | -                | -                | -         |   -15.10 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           41 |     2121 | 2024-04-06 | Solid          | W   | 0.717      | 0.435        | 0.051 (0.016)    | -                | -         |     5.44 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           40 |     2136 | 2024-04-05 | MIBR           | L   | 0.711      | -            | -                | -                | -         |    -1.65 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           39 |     2137 | 2024-04-05 | MIBR           | W   | 0.711      | 0.450        | 0.281 (0.090)    | 0.688 (0.220)    | -         |    20.95 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           38 |     2164 | 2024-04-04 | Corinthians    | W   | 0.704      | -            | -                | -                | -         |     2.33 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           37 |     2170 | 2024-04-04 | Corinthians    | W   | 0.704      | -            | -                | -                | -         |     2.38 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           36 |     2182 | 2024-04-04 | RED Canids     | L   | 0.702      | -            | -                | -                | -         |    -8.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           35 |     2198 | 2024-04-03 | MIBR           | L   | 0.698      | -            | -                | -                | -         |    -1.36 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           34 |     2211 | 2024-04-03 | BESTIA         | W   | 0.697      | -            | -                | -                | -         |     8.24 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           33 |     2248 | 2024-04-02 | MIBR           | L   | 0.691      | -            | -                | -                | -         |    -1.30 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           32 |     2252 | 2024-04-02 | BESTIA         | W   | 0.690      | -            | -                | -                | -         |     8.47 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           31 |     2337 | 2024-03-27 | Galorys        | L   | 0.651      | -            | -                | -                | -         |   -15.84 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           30 |     2343 | 2024-03-27 | Galorys        | W   | 0.651      | -            | -                | -                | -         |     4.58 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           29 |     2618 | 2024-03-13 | Intense        | W   | 0.557      | -            | -                | -                | -         |     0.83 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           28 |     2624 | 2024-03-13 | Solid          | L   | 0.556      | -            | -                | -                | -         |   -13.30 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           27 |     2651 | 2024-03-12 | MIBR           | W   | 0.550      | 0.435        | 0.281 (0.067)    | -                | -         |    16.31 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           26 |     2681 | 2024-03-11 | Sharks         | W   | 0.542      | -            | -                | -                | -         |     6.69 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           25 |     2725 | 2024-03-09 | Corinthians    | W   | 0.528      | -            | -                | -                | -         |     1.98 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           24 |     2761 | 2024-03-07 | Case           | L   | 0.517      | -            | -                | -                | -         |   -12.59 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           23 |     2786 | 2024-03-06 | Solid          | L   | 0.511      | -            | -                | -                | -         |   -12.15 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           22 |     2788 | 2024-03-06 | Solid          | W   | 0.511      | -            | -                | -                | -         |     3.94 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           21 |     2853 | 2024-03-04 | Case           | W   | 0.498      | -            | -                | -                | -         |     3.78 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           20 |     2854 | 2024-03-04 | Case           | W   | 0.497      | -            | -                | -                | -         |     3.90 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           19 |     3011 | 2024-02-25 | Imperial       | W   | 0.443      | 0.435        | 0.406 (0.078)    | -                | -         |    13.00 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           18 |     3041 | 2024-02-24 | Sharks         | W   | 0.437      | -            | -                | -                | -         |     5.44 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           17 |     3092 | 2024-02-21 | W7M            | L   | 0.418      | -            | -                | -                | -         |   -10.62 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           16 |     3096 | 2024-02-21 | W7M            | W   | 0.417      | -            | -                | -                | -         |     2.53 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           15 |     3103 | 2024-02-21 | Solid          | W   | 0.416      | -            | -                | -                | -         |     3.75 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           14 |     3128 | 2024-02-20 | Solid          | L   | 0.410      | -            | -                | -                | -         |    -9.43 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           13 |     3224 | 2024-02-16 | 9z             | W   | 0.383      | 0.435        | 0.525 (0.087)    | -                | -         |    11.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           12 |     3251 | 2024-02-15 | Imperial       | L   | 0.377      | -            | -                | -                | -         |    -0.75 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           11 |     3254 | 2024-02-15 | W7M            | W   | 0.377      | -            | -                | -                | -         |     2.47 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           10 |     3258 | 2024-02-15 | Sharks         | W   | 0.376      | -            | -                | -                | -         |     4.95 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            9 |     3261 | 2024-02-15 | Sharks         | W   | 0.376      | -            | -                | -                | -         |     5.11 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            8 |     3282 | 2024-02-14 | Intense        | W   | 0.371      | -            | -                | -                | -         |     0.64 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            7 |     3347 | 2024-02-12 | Flamengo       | W   | 0.355      | -            | -                | -                | -         |     0.52 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            6 |     3664 | 2024-01-23 | 9z             | L   | 0.224      | -            | -                | -                | -         |    -0.21 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            5 |     3685 | 2024-01-22 | ODDIK          | W   | 0.218      | -            | -                | -                | -         |     2.77 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            4 |     3722 | 2024-01-21 | Case           | L   | 0.210      | -            | -                | -                | -         |    -6.00 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            3 |     3759 | 2024-01-20 | Imperial       | L   | 0.203      | -            | -                | -                | -         |    -0.41 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            2 |     3803 | 2024-01-19 | RED Canids     | L   | 0.197      | -            | -                | -                | -         |    -2.22 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            1 |     3810 | 2024-01-19 | adalYamigos    | W   | 0.197      | -            | -                | -                | -         |     0.54 | chayJESUS, Lucaozy, PKL, vsm, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,902.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $30,000.00     | $30,000.00      |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-19 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-14 |      0.564 | $5,000.00      | $2,818.01       |
| 2024-02-25 |      0.443 | $25,000.00     | $11,083.99      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
