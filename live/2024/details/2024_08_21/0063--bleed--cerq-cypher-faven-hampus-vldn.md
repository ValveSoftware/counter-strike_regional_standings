### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [63](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [44]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  987.8<br />
<br />
Final Rank Value (987.8) = Starting Rank Value (897.9) + Head To Head Adjustments (89.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.463[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 897.9
- 400 + ( ( 0.251 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 897.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |     2796 | 2024-05-11 | B8                | L   | 0.517      | -            | -                | -                | -         |    -7.27 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     2824 | 2024-05-09 | Sampi             | W   | 0.506      | 0.435        | -                | 0.889 (0.196)    | 0 (0.000) |     5.86 | CYPHER, draken, faveN, hampus, VLDN |
|           40 |     2866 | 2024-05-07 | 1WIN              | L   | 0.493      | -            | -                | -                | -         |    -9.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     2890 | 2024-05-06 | Insilio           | W   | 0.484      | -            | -                | -                | 0 (0.000) |     6.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     2956 | 2024-05-02 | AMKAL             | L   | 0.460      | -            | -                | -                | -         |    -5.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     2990 | 2024-05-01 | MOUZ NXT          | L   | 0.451      | -            | -                | -                | -         |    -6.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     3022 | 2024-04-30 | Permitta          | W   | 0.444      | 0.384        | -                | 0.953 (0.163)    | 0 (0.000) |     5.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     3045 | 2024-04-28 | B8                | W   | 0.433      | 0.500        | 0.170 (0.037)    | 1.000 (0.217)    | 0 (0.000) |     7.17 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     3096 | 2024-04-26 | ex-Guild Eagles   | W   | 0.419      | -            | -                | -                | 0 (0.000) |     3.41 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     3104 | 2024-04-26 | DMS               | W   | 0.418      | 0.500        | -                | 0.510 (0.107)    | 0 (0.000) |     5.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     3144 | 2024-04-24 | Permitta          | W   | 0.406      | 0.435        | -                | 0.953 (0.168)    | 0 (0.000) |     6.16 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     3147 | 2024-04-24 | Nemiga            | L   | 0.405      | -            | -                | -                | -         |    -2.87 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     3163 | 2024-04-23 | B8                | W   | 0.399      | 0.500        | 0.170 (0.034)    | 1.000 (0.200)    | 0 (0.000) |     7.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     3172 | 2024-04-23 | Sashi             | L   | 0.398      | -            | -                | -                | -         |    -3.68 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     3181 | 2024-04-22 | Sangal            | W   | 0.392      | 0.500        | 0.277 (0.054)    | 0.800 (0.157)    | 0 (0.000) |     9.08 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     3183 | 2024-04-22 | Gaimin Gladiators | W   | 0.391      | -            | -                | -                | 0 (0.000) |     5.57 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     3198 | 2024-04-21 | Illuminar         | W   | 0.386      | -            | -                | -                | -         |     1.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     3204 | 2024-04-21 | BIG               | W   | 0.385      | 0.384        | 0.150 (0.022)    | -                | -         |    10.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     3228 | 2024-04-20 | MOUZ NXT          | W   | 0.379      | 0.500        | 0.127 (0.024)    | 0.885 (0.168)    | -         |     7.06 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     3284 | 2024-04-19 | Sampi             | W   | 0.371      | 0.384        | -                | 0.889 (0.127)    | -         |     4.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     3341 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.364      | 0.500        | 0.035 (0.006)    | -                | -         |     6.03 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     3365 | 2024-04-17 | 3DMAX             | L   | 0.358      | -            | -                | -                | -         |    -0.27 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     3393 | 2024-04-16 | KOI               | W   | 0.353      | 0.384        | 0.051 (0.007)    | -                | -         |     6.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     3405 | 2024-04-16 | SINNERS           | W   | 0.351      | 0.384        | 0.075 (0.010)    | 1.000 (0.135)    | -         |     9.11 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     3583 | 2024-04-09 | Alliance          | W   | 0.306      | -            | -                | -                | -         |     3.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     3596 | 2024-04-09 | HAVU              | W   | 0.305      | -            | -                | -                | -         |     1.85 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     3677 | 2024-04-05 | BetBoom           | L   | 0.279      | -            | -                | -                | -         |    -0.80 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     3680 | 2024-04-05 | Alliance          | W   | 0.279      | -            | -                | -                | -         |     3.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3721 | 2024-04-04 | Benched Heroes    | W   | 0.272      | -            | -                | -                | -         |     0.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3727 | 2024-04-04 | BetBoom           | L   | 0.271      | -            | -                | -                | -         |    -0.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3796 | 2024-04-02 | Passion UA        | W   | 0.259      | 0.384        | 0.170 (0.017)    | -                | -         |     5.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     3819 | 2024-04-01 | Enterprise        | L   | 0.252      | -            | -                | -                | -         |    -4.13 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4169 | 2024-03-13 | Sashi             | W   | 0.124      | -            | -                | -                | -         |     3.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4270 | 2024-03-09 | Endpoint          | W   | 0.097      | -            | -                | -                | -         |     1.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4337 | 2024-03-06 | fnatic            | L   | 0.079      | -            | -                | -                | -         |    -0.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4383 | 2024-03-05 | BetBoom           | W   | 0.072      | 0.500        | 0.279 (0.010)    | -                | -         |     2.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4392 | 2024-03-04 | Rebels            | W   | 0.067      | -            | -                | -                | -         |     1.24 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4398 | 2024-03-04 | AURA              | W   | 0.065      | -            | -                | -                | -         |     0.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4464 | 2024-03-01 | Young Ninjas      | W   | 0.046      | -            | -                | -                | -         |     0.56 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4479 | 2024-02-29 | AURA              | W   | 0.038      | -            | -                | -                | -         |     0.11 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     4495 | 2024-02-28 | BIG               | W   | 0.031      | -            | -                | -                | -         |     0.87 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     4530 | 2024-02-26 | MOUZ NXT          | L   | 0.019      | -            | -                | -                | -         |    -0.21 | CeRq, faveN, hampus, lauNX, VLDN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,284.59)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.566 | $500.00        | $283.10         |
| 2024-05-12 |      0.526 | $2,000.00      | $1,052.38       |
| 2024-04-24 |      0.405 | $25,000.00     | $10,135.78      |
| 2024-04-22 |      0.391 | $20,000.00     | $7,829.68       |
| 2024-03-06 |      0.079 | $25,000.00     | $1,983.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
