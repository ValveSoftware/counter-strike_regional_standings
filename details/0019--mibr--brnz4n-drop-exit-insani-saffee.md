### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1519.5<br />
<br />
Final Rank Value (1519.5) = Starting Rank Value (1622.4) + Head To Head Adjustments (-102.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.645[<sup>1</sup>](#table2)
- Bounty Collected: 0.571[<sup>2</sup>](#table1)
- Opponent Network: 0.326[<sup>2</sup>](#table1)
- LAN Wins: 0.864[<sup>2</sup>](#table1)

The average of these factors is 0.602<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1622.4
- 400 + ( ( 0.602 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1622.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |       61 | 2024-06-15 | Complexity     | L   | 1.000      | -            | -                | -                | -         |    -8.53 | brnz4n, drop, exit, insani, saffee |
|           74 |       86 | 2024-06-14 | Alliance       | W   | 1.000      | 0.500        | -                | 0.432 (0.216)    | 1 (1.000) |     0.97 | brnz4n, drop, exit, insani, saffee |
|           73 |      103 | 2024-06-14 | ENCE           | L   | 1.000      | -            | -                | -                | -         |   -22.53 | brnz4n, drop, exit, insani, saffee |
|           72 |      342 | 2024-06-07 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -31.02 | brnz4n, drop, exit, insani, saffee |
|           71 |      401 | 2024-06-06 | 9z             | L   | 1.000      | -            | -                | -                | -         |   -18.75 | brnz4n, drop, exit, insani, saffee |
|           70 |      473 | 2024-06-05 | BESTIA         | W   | 1.000      | 0.450        | -                | 0.594 (0.268)    | -         |     1.78 | brnz4n, drop, exit, insani, saffee |
|           69 |      525 | 2024-06-04 | Galorys        | W   | 1.000      | 0.450        | -                | 0.517 (0.233)    | -         |     0.44 | brnz4n, drop, exit, insani, saffee |
|           68 |      853 | 2024-05-22 | paiN           | W   | 1.000      | 0.450        | 0.492 (0.221)    | 0.775 (0.349)    | -         |    11.26 | brnz4n, drop, exit, insani, saffee |
|           67 |      856 | 2024-05-22 | paiN           | W   | 1.000      | 0.450        | 0.492 (0.221)    | 0.775 (0.349)    | -         |    12.23 | brnz4n, drop, exit, insani, saffee |
|           66 |      926 | 2024-05-20 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -19.76 | brnz4n, drop, exit, insani, saffee |
|           65 |      939 | 2024-05-20 | BIG            | W   | 1.000      | 0.769        | 0.225 (0.173)    | 0.433 (0.333)    | -         |     8.53 | brnz4n, drop, exit, insani, saffee |
|           64 |      948 | 2024-05-20 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -20.96 | brnz4n, drop, exit, insani, saffee |
|           63 |     1025 | 2024-05-17 | HEROIC         | L   | 0.989      | -            | -                | -                | -         |   -10.97 | brnz4n, drop, exit, insani, saffee |
|           62 |     1059 | 2024-05-16 | Aurora         | W   | 0.983      | 0.769        | 0.526 (0.398)    | 0.874 (0.660)    | 1 (0.983) |    10.74 | brnz4n, drop, exit, insani, saffee |
|           61 |     1115 | 2024-05-15 | HEROIC         | L   | 0.975      | -            | -                | -                | -         |   -11.06 | brnz4n, drop, exit, insani, saffee |
|           60 |     1524 | 2024-04-28 | Aurora         | W   | 0.860      | 0.500        | 0.526 (0.226)    | 0.874 (0.376)    | 1 (0.860) |    11.71 | brnz4n, drop, exit, insani, saffee |
|           59 |     1526 | 2024-04-27 | Apeks          | W   | 0.859      | -            | -                | -                | 1 (0.859) |     2.16 | brnz4n, drop, exit, insani, saffee |
|           58 |     1552 | 2024-04-27 | Rooster        | W   | 0.853      | -            | -                | -                | 1 (0.853) |     0.41 | brnz4n, drop, exit, insani, saffee |
|           57 |     1574 | 2024-04-26 | Rebels         | L   | 0.846      | -            | -                | -                | -         |   -25.31 | brnz4n, drop, exit, insani, saffee |
|           56 |     1577 | 2024-04-25 | KZG            | W   | 0.845      | -            | -                | -                | 1 (0.845) |     0.12 | brnz4n, drop, exit, insani, saffee |
|           55 |     1686 | 2024-04-20 | paiN           | L   | 0.809      | -            | -                | -                | -         |   -14.90 | brnz4n, drop, exit, insani, saffee |
|           54 |     1693 | 2024-04-20 | OG             | W   | 0.809      | 0.589        | 0.235 (0.112)    | -                | 1 (0.809) |     3.31 | brnz4n, drop, exit, insani, saffee |
|           53 |     1709 | 2024-04-19 | paiN           | W   | 0.805      | 0.143        | 0.492 (0.057)    | -                | -         |    11.21 | brnz4n, drop, exit, insani, saffee |
|           52 |     1716 | 2024-04-19 | FURIA          | W   | 0.804      | 0.589        | 0.245 (0.116)    | 0.521 (0.247)    | 1 (0.804) |    11.30 | brnz4n, drop, exit, insani, saffee |
|           51 |     1738 | 2024-04-19 | paiN           | L   | 0.802      | -            | -                | -                | -         |   -14.35 | brnz4n, drop, exit, insani, saffee |
|           50 |     1759 | 2024-04-18 | Imperial       | W   | 0.798      | -            | -                | -                | -         |     9.46 | brnz4n, drop, exit, insani, saffee |
|           49 |     1761 | 2024-04-18 | paiN           | W   | 0.798      | -            | -                | -                | -         |    11.18 | brnz4n, drop, exit, insani, saffee |
|           48 |     1766 | 2024-04-18 | OG             | W   | 0.797      | 0.589        | 0.235 (0.110)    | -                | 1 (0.797) |     3.29 | brnz4n, drop, exit, insani, saffee |
|           47 |     1811 | 2024-04-17 | RED Canids     | W   | 0.791      | -            | -                | -                | -         |     1.88 | brnz4n, drop, exit, insani, saffee |
|           46 |     1817 | 2024-04-17 | Case           | W   | 0.790      | -            | -                | -                | -         |     0.42 | brnz4n, drop, exit, insani, saffee |
|           45 |     1856 | 2024-04-16 | Bounty Hunters | W   | 0.784      | -            | -                | -                | -         |     0.26 | brnz4n, drop, exit, insani, saffee |
|           44 |     1877 | 2024-04-15 | Imperial       | W   | 0.777      | 0.435        | 0.406 (0.137)    | 0.694 (0.234)    | -         |     9.73 | brnz4n, drop, exit, insani, saffee |
|           43 |     1891 | 2024-04-14 | Galorys        | W   | 0.770      | -            | -                | -                | -         |     0.50 | brnz4n, drop, exit, insani, saffee |
|           42 |     1905 | 2024-04-13 | Case           | W   | 0.763      | -            | -                | -                | -         |     0.41 | brnz4n, drop, exit, insani, saffee |
|           41 |     1935 | 2024-04-11 | paiN           | W   | 0.751      | -            | -                | -                | -         |    12.20 | brnz4n, drop, exit, insani, saffee |
|           40 |     1977 | 2024-04-10 | Galorys        | W   | 0.744      | -            | -                | -                | -         |     0.45 | brnz4n, drop, exit, insani, saffee |
|           39 |     1978 | 2024-04-10 | Galorys        | W   | 0.744      | -            | -                | -                | -         |     0.45 | brnz4n, drop, exit, insani, saffee |
|           38 |     1995 | 2024-04-10 | Imperial       | W   | 0.742      | -            | -                | -                | -         |    10.78 | brnz4n, drop, exit, insani, saffee |
|           37 |     2027 | 2024-04-09 | adalYamigos    | W   | 0.737      | -            | -                | -                | -         |     0.24 | brnz4n, drop, exit, insani, saffee |
|           36 |     2031 | 2024-04-09 | adalYamigos    | W   | 0.737      | -            | -                | -                | -         |     0.24 | brnz4n, drop, exit, insani, saffee |
|           35 |     2036 | 2024-04-09 | RED Canids     | W   | 0.737      | -            | -                | -                | -         |     2.05 | brnz4n, drop, exit, insani, saffee |
|           34 |     2068 | 2024-04-08 | W7M            | W   | 0.731      | -            | -                | -                | -         |     0.36 | brnz4n, drop, exit, insani, saffee |
|           33 |     2102 | 2024-04-07 | paiN           | W   | 0.725      | -            | -                | -                | -         |    13.07 | brnz4n, drop, exit, insani, saffee |
|           32 |     2120 | 2024-04-06 | Bounty Hunters | W   | 0.717      | -            | -                | -                | -         |     0.32 | brnz4n, drop, exit, insani, saffee |
|           31 |     2136 | 2024-04-05 | Fluxo          | W   | 0.711      | -            | -                | -                | -         |     1.65 | brnz4n, drop, exit, insani, saffee |
|           30 |     2137 | 2024-04-05 | Fluxo          | L   | 0.711      | -            | -                | -                | -         |   -20.95 | brnz4n, drop, exit, insani, saffee |
|           29 |     2140 | 2024-04-05 | ODDIK          | W   | 0.710      | -            | -                | -                | -         |     0.70 | brnz4n, drop, exit, insani, saffee |
|           28 |     2163 | 2024-04-04 | Solid          | W   | 0.704      | -            | -                | -                | -         |     0.50 | brnz4n, drop, exit, insani, saffee |
|           27 |     2167 | 2024-04-04 | Solid          | W   | 0.704      | -            | -                | -                | -         |     0.50 | brnz4n, drop, exit, insani, saffee |
|           26 |     2198 | 2024-04-03 | Fluxo          | W   | 0.698      | -            | -                | -                | -         |     1.36 | brnz4n, drop, exit, insani, saffee |
|           25 |     2248 | 2024-04-02 | Fluxo          | W   | 0.691      | -            | -                | -                | -         |     1.30 | brnz4n, drop, exit, insani, saffee |
|           24 |     2251 | 2024-04-02 | Sharks         | W   | 0.690      | -            | -                | -                | -         |     0.24 | brnz4n, drop, exit, insani, saffee |
|           23 |     2338 | 2024-03-27 | Case           | W   | 0.651      | -            | -                | -                | -         |     0.38 | brnz4n, drop, exit, insani, saffee |
|           22 |     2344 | 2024-03-27 | Case           | W   | 0.651      | -            | -                | -                | -         |     0.38 | brnz4n, drop, exit, insani, saffee |
|           21 |     2384 | 2024-03-26 | ODDIK          | W   | 0.644      | -            | -                | -                | -         |     0.70 | brnz4n, drop, exit, insani, saffee |
|           20 |     2386 | 2024-03-26 | ODDIK          | W   | 0.644      | -            | -                | -                | -         |     0.70 | brnz4n, drop, exit, insani, saffee |
|           19 |     2578 | 2024-03-14 | Sharks         | W   | 0.564      | -            | -                | -                | -         |     0.71 | brnz4n, drop, exit, insani, saffee |
|           18 |     2580 | 2024-03-14 | Sharks         | W   | 0.564      | -            | -                | -                | -         |     0.71 | brnz4n, drop, exit, insani, saffee |
|           17 |     2651 | 2024-03-12 | Fluxo          | L   | 0.550      | -            | -                | -                | -         |   -16.31 | brnz4n, drop, exit, insani, saffee |
|           16 |     2690 | 2024-03-10 | Galorys        | W   | 0.537      | -            | -                | -                | -         |     0.27 | brnz4n, drop, exit, insani, saffee |
|           15 |     2738 | 2024-03-08 | LA RUGONETA    | W   | 0.523      | -            | -                | -                | -         |     0.07 | brnz4n, drop, exit, insani, saffee |
|           14 |     2869 | 2024-03-03 | Legacy         | L   | 0.490      | -            | -                | -                | -         |   -14.57 | brnz4n, drop, exit, insani, saffee |
|           13 |     2901 | 2024-03-02 | NRG            | W   | 0.483      | -            | -                | -                | 1 (0.483) |     0.30 | brnz4n, drop, exit, insani, saffee |
|           12 |     2924 | 2024-03-01 | BOSS           | L   | 0.476      | -            | -                | -                | -         |   -14.79 | brnz4n, drop, exit, insani, saffee |
|           11 |     3450 | 2024-02-03 | Imperial       | L   | 0.297      | -            | -                | -                | -         |    -5.60 | brnz4n, drop, exit, insani, saffee |
|           10 |     3514 | 2024-02-01 | paiN           | W   | 0.284      | -            | -                | -                | -         |     4.43 | brnz4n, drop, exit, insani, saffee |
|            9 |     3517 | 2024-02-01 | W7M            | W   | 0.283      | -            | -                | -                | -         |     0.09 | brnz4n, drop, exit, insani, saffee |
|            8 |     3690 | 2024-01-22 | adalYamigos    | L   | 0.217      | -            | -                | -                | -         |    -6.82 | brnz4n, drop, exit, insani, saffee |
|            7 |     3752 | 2024-01-20 | BESTIA         | W   | 0.204      | -            | -                | -                | -         |     0.22 | brnz4n, drop, exit, insani, saffee |
|            6 |     3800 | 2024-01-19 | TIMACETA       | W   | 0.198      | -            | -                | -                | -         |     0.01 | brnz4n, drop, exit, insani, saffee |
|            5 |     3814 | 2024-01-19 | ODDIK          | W   | 0.196      | -            | -                | -                | -         |     0.16 | brnz4n, drop, exit, insani, saffee |
|            4 |     3857 | 2024-01-18 | 9z             | L   | 0.191      | -            | -                | -                | -         |    -2.46 | brnz4n, drop, exit, insani, saffee |
|            3 |     3864 | 2024-01-18 | Sharks         | W   | 0.190      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|            2 |     3906 | 2024-01-17 | 9z             | L   | 0.185      | -            | -                | -                | -         |    -2.41 | brnz4n, drop, exit, insani, saffee |
|            1 |     3928 | 2024-01-17 | Sharks         | W   | 0.183      | -            | -                | -                | -         |     0.16 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84,649.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-04-28 |      0.860 | $50,000.00     | $43,015.85      |
| 2024-04-20 |      0.810 | $20,000.00     | $16,209.48      |
| 2024-04-15 |      0.777 | $25,000.00     | $19,423.67      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
