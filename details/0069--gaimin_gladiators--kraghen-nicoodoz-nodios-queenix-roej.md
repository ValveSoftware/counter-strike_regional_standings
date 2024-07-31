### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, nicoodoz, Nodios, Queenix, roeJ<br />
Global Rank: [69](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
<br />
Final Rank Value:  958.7<br />
<br />
Final Rank Value (958.7) = Starting Rank Value (985.3) + Head To Head Adjustments (-26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.182[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 985.3
- 400 + ( ( 0.283 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 985.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      166 | 2024-07-26 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -9.54 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           54 |      917 | 2024-06-14 | GUN5             | L   | 0.886      | -            | -                | -                | -         |   -13.51 | kraghen, Nodios, Patti, Queenix, salazar |
|           53 |     1044 | 2024-06-10 | Enterprise       | L   | 0.858      | -            | -                | -                | -         |   -16.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           52 |     1099 | 2024-06-09 | 5W               | L   | 0.851      | -            | -                | -                | -         |   -14.95 | kraghen, Nodios, Patti, Queenix, salazar |
|           51 |     1142 | 2024-06-08 | EYEBALLERS       | W   | 0.846      | 0.450        | -                | 0.513 (0.195)    | 0 (0.000) |    10.27 | kraghen, Nodios, Patti, Queenix, salazar |
|           50 |     1199 | 2024-06-07 | 3DMAX            | L   | 0.839      | -            | -                | -                | -         |    -1.58 | kraghen, Nodios, Patti, Queenix, salazar |
|           49 |     1263 | 2024-06-06 | Astralis Talent  | W   | 0.832      | 0.450        | -                | 0.162 (0.061)    | 0 (0.000) |     5.86 | kraghen, Nodios, Patti, Queenix, salazar |
|           48 |     1516 | 2024-05-30 | Lynn Vision      | L   | 0.784      | -            | -                | -                | -         |   -12.88 | kraghen, Nodios, Patti, Queenix, salazar |
|           47 |     1560 | 2024-05-28 | The MongolZ      | L   | 0.771      | -            | -                | -                | -         |    -0.17 | kraghen, Nodios, Patti, Queenix, salazar |
|           46 |     1845 | 2024-05-17 | ENCE             | L   | 0.700      | -            | -                | -                | -         |    -2.36 | kraghen, Nodios, Patti, Queenix, salazar |
|           45 |     1851 | 2024-05-17 | GamerLegion      | L   | 0.700      | -            | -                | -                | -         |    -6.75 | kraghen, Nodios, Patti, Queenix, salazar |
|           44 |     1861 | 2024-05-17 | Rebels           | L   | 0.698      | -            | -                | -                | -         |   -11.33 | kraghen, Nodios, Patti, Queenix, salazar |
|           43 |     1944 | 2024-05-15 | BLEED            | W   | 0.685      | 0.384        | 0.128 (0.034)    | 0.512 (0.135)    | 0 (0.000) |    19.52 | kraghen, Nodios, Patti, Queenix, salazar |
|           42 |     2169 | 2024-05-07 | Grannys Knockers | L   | 0.630      | -            | -                | -                | -         |   -15.70 | kraghen, Nodios, Patti, Queenix, salazar |
|           41 |     2179 | 2024-05-06 | 500              | W   | 0.625      | -            | -                | -                | -         |     0.60 | kraghen, Nodios, Patti, Queenix, salazar |
|           40 |     2191 | 2024-05-05 | Sashi            | W   | 0.619      | 0.143        | 0.187 (0.017)    | 0.973 (0.086)    | -         |    14.76 | kraghen, Nodios, Patti, Queenix, salazar |
|           39 |     2197 | 2024-05-05 | Kronjyllands     | W   | 0.619      | -            | -                | -                | -         |     0.60 | kraghen, Nodios, Patti, Queenix, salazar |
|           38 |     2227 | 2024-05-03 | AMKAL            | L   | 0.606      | -            | -                | -                | -         |    -5.83 | kraghen, Nodios, Patti, Queenix, salazar |
|           37 |     2256 | 2024-05-02 | HAVU             | W   | 0.599      | -            | -                | -                | -         |     2.97 | kraghen, Nodios, Patti, Queenix, salazar |
|           36 |     2263 | 2024-05-02 | SINNERS          | W   | 0.598      | 0.435        | 0.038 (0.010)    | 0.721 (0.187)    | -         |     9.34 | kraghen, Nodios, Patti, Queenix, salazar |
|           35 |     2298 | 2024-04-30 | AMKAL            | L   | 0.586      | -            | -                | -                | -         |    -5.75 | kraghen, Nodios, Patti, Queenix, salazar |
|           34 |     2325 | 2024-04-29 | kONO             | L   | 0.578      | -            | -                | -                | -         |   -13.80 | kraghen, Nodios, Patti, Queenix, salazar |
|           33 |     2350 | 2024-04-28 | 9 Pandas         | L   | 0.571      | -            | -                | -                | -         |   -10.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           32 |     2399 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.557      | -            | -                | -                | -         |   -11.00 | kraghen, Nodios, Patti, Queenix, salazar |
|           31 |     2460 | 2024-04-23 | Sashi            | L   | 0.538      | -            | -                | -                | -         |    -5.73 | kraghen, Nodios, Patti, Queenix, salazar |
|           30 |     2475 | 2024-04-22 | BLEED            | L   | 0.531      | -            | -                | -                | -         |    -8.41 | kraghen, Nodios, Patti, Queenix, salazar |
|           29 |     2493 | 2024-04-21 | AMKAL            | W   | 0.525      | 0.384        | 0.132 (0.027)    | 0.484 (0.098)    | -         |    10.48 | kraghen, Nodios, Patti, Queenix, salazar |
|           28 |     2530 | 2024-04-20 | Nemiga           | W   | 0.518      | 0.384        | 0.325 (0.065)    | 0.698 (0.139)    | -         |    10.90 | kraghen, Nodios, Patti, Queenix, salazar |
|           27 |     2665 | 2024-04-17 | SINNERS          | W   | 0.497      | 0.384        | 0.038 (0.007)    | 0.721 (0.138)    | -         |     8.85 | kraghen, Nodios, Patti, Queenix, salazar |
|           26 |     2693 | 2024-04-16 | Permitta         | W   | 0.492      | 0.384        | -                | 0.799 (0.151)    | -         |     6.21 | kraghen, Nodios, Patti, Queenix, salazar |
|           25 |     3021 | 2024-04-04 | JANO             | W   | 0.411      | -            | -                | -                | -         |     1.65 | kraghen, Nodios, Patti, Queenix, salazar |
|           24 |     3236 | 2024-03-23 | G2               | L   | 0.333      | -            | -                | -                | -         |    -0.05 | kraghen, Nodios, Patti, Queenix, salazar |
|           23 |     3245 | 2024-03-22 | FURIA            | W   | 0.327      | 1.000        | 0.286 (0.094)    | 0.495 (0.162)    | 1 (0.327) |    10.11 | kraghen, Nodios, Patti, Queenix, salazar |
|           22 |     3266 | 2024-03-21 | Cloud9           | L   | 0.320      | -            | -                | -                | -         |    -4.15 | kraghen, Nodios, Patti, Queenix, salazar |
|           21 |     3281 | 2024-03-21 | MOUZ             | L   | 0.318      | -            | -                | -                | -         |    -0.08 | kraghen, Nodios, Patti, Queenix, salazar |
|           20 |     3312 | 2024-03-19 | Imperial         | W   | 0.306      | 0.143        | 0.245 (0.011)    | -                | 1 (0.306) |     8.04 | kraghen, Nodios, Patti, Queenix, salazar |
|           19 |     3326 | 2024-03-18 | Lynn Vision      | W   | 0.298      | -            | -                | -                | 1 (0.298) |     4.74 | kraghen, Nodios, Patti, Queenix, salazar |
|           18 |     3347 | 2024-03-17 | The MongolZ      | W   | 0.293      | 0.143        | 1.000 (0.042)    | -                | 1 (0.293) |     9.18 | kraghen, Nodios, Patti, Queenix, salazar |
|           17 |     3358 | 2024-03-17 | Cloud9           | L   | 0.291      | -            | -                | -                | -         |    -3.73 | kraghen, Nodios, Patti, Queenix, salazar |
|           16 |     3693 | 2024-03-04 | BetBoom          | L   | 0.204      | -            | -                | -                | -         |    -0.51 | kraghen, Nodios, Patti, Queenix, salazar |
|           15 |     3699 | 2024-03-03 | ex-Preasy        | L   | 0.200      | -            | -                | -                | -         |    -4.74 | kraghen, Nodios, Patti, Queenix, salazar |
|           14 |     3705 | 2024-03-03 | fnatic           | W   | 0.199      | 0.143        | 0.374 (0.011)    | -                | -         |     6.04 | kraghen, Nodios, Patti, Queenix, salazar |
|           13 |     3717 | 2024-03-03 | SINNERS          | W   | 0.199      | -            | -                | -                | -         |     3.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           12 |     3722 | 2024-03-03 | Monte            | W   | 0.197      | -            | -                | -                | -         |     3.35 | kraghen, Nodios, Patti, Queenix, salazar |
|           11 |     3739 | 2024-03-02 | PARIVISION       | W   | 0.192      | -            | -                | -                | -         |     3.89 | kraghen, Nodios, Patti, Queenix, salazar |
|           10 |     3764 | 2024-02-29 | 3DMAX            | L   | 0.180      | -            | -                | -                | -         |    -0.11 | kraghen, Nodios, Patti, Queenix, salazar |
|            9 |     3909 | 2024-02-22 | ex-Guild Eagles  | W   | 0.132      | -            | -                | -                | 1 (0.132) |     1.22 | kraghen, Nodios, Patti, Queenix, salazar |
|            8 |     3936 | 2024-02-21 | Apeks            | L   | 0.125      | -            | -                | -                | -         |    -2.29 | kraghen, Nodios, Patti, Queenix, salazar |
|            7 |     3967 | 2024-02-20 | OG               | W   | 0.117      | -            | -                | -                | 1 (0.117) |     1.99 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     3982 | 2024-02-19 | MOUZ             | L   | 0.113      | -            | -                | -                | -         |    -0.02 | kraghen, Nodios, Patti, Queenix, salazar |
|            5 |     3993 | 2024-02-19 | Monte            | W   | 0.111      | -            | -                | -                | 1 (0.111) |     1.92 | kraghen, Nodios, Patti, Queenix, salazar |
|            4 |     4208 | 2024-02-09 | ex-Preasy        | L   | 0.045      | -            | -                | -                | -         |    -1.05 | kraghen, Nodios, Patti, Queenix, salazar |
|            3 |     4228 | 2024-02-07 | TSM              | W   | 0.031      | -            | -                | -                | -         |     0.15 | kraghen, Nodios, Patti, Queenix, salazar |
|            2 |     4250 | 2024-02-05 | ex-Preasy        | W   | 0.018      | -            | -                | -                | -         |     0.14 | kraghen, Nodios, Patti, Queenix, salazar |
|            1 |     4288 | 2024-02-03 | Sashi            | L   | 0.006      | -            | -                | -                | -         |    -0.05 | kraghen, Nodios, Patti, Queenix, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,141.73)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.706 | $1,000.00      | $706.18         |
| 2024-05-04 |      0.612 | $2,000.00      | $1,224.88       |
| 2024-05-02 |      0.599 | $1,000.00      | $599.33         |
| 2024-04-22 |      0.531 | $5,000.00      | $2,657.33       |
| 2024-03-31 |      0.387 | $20,000.00     | $7,730.31       |
| 2024-02-09 |      0.045 | $5,000.00      | $223.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
