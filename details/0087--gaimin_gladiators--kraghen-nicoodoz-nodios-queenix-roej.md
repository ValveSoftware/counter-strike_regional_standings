### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, nicoodoz, Nodios, Queenix, roeJ<br />
Global Rank: [87](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
<br />
Final Rank Value:  896.0<br />
<br />
Final Rank Value (896.0) = Starting Rank Value (900.6) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.401[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 900.6
- 400 + ( ( 0.254 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 900.6


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
|           53 |       39 | 2024-08-13 | Meteor           | W   | 1.000      | 0.384        | -                | 0.144 (0.056)    | 0 (0.000) |    10.03 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           52 |      341 | 2024-08-04 | TYLOO            | L   | 1.000      | -            | -                | -                | -         |   -13.13 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           51 |      647 | 2024-07-26 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -7.68 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           50 |     1398 | 2024-06-14 | GUN5             | L   | 0.793      | -            | -                | -                | -         |   -10.60 | kraghen, Nodios, Patti, Queenix, salazar |
|           49 |     1525 | 2024-06-10 | Enterprise       | L   | 0.764      | -            | -                | -                | -         |   -13.16 | kraghen, Nodios, Patti, Queenix, salazar |
|           48 |     1580 | 2024-06-09 | 5W               | L   | 0.757      | -            | -                | -                | -         |   -12.39 | kraghen, Nodios, Patti, Queenix, salazar |
|           47 |     1623 | 2024-06-08 | EYEBALLERS       | W   | 0.752      | 0.450        | -                | 0.614 (0.208)    | 0 (0.000) |    10.80 | kraghen, Nodios, Patti, Queenix, salazar |
|           46 |     1680 | 2024-06-07 | 3DMAX            | L   | 0.745      | -            | -                | -                | -         |    -1.14 | kraghen, Nodios, Patti, Queenix, salazar |
|           45 |     1744 | 2024-06-06 | Astralis Talent  | W   | 0.739      | -            | -                | -                | 0 (0.000) |     6.03 | kraghen, Nodios, Patti, Queenix, salazar |
|           44 |     1997 | 2024-05-30 | Lynn Vision      | L   | 0.690      | -            | -                | -                | -         |    -9.37 | kraghen, Nodios, Patti, Queenix, salazar |
|           43 |     2041 | 2024-05-28 | The MongolZ      | L   | 0.677      | -            | -                | -                | -         |    -0.12 | kraghen, Nodios, Patti, Queenix, salazar |
|           42 |     2326 | 2024-05-17 | ENCE             | L   | 0.607      | -            | -                | -                | -         |    -2.00 | kraghen, Nodios, Patti, Queenix, salazar |
|           41 |     2332 | 2024-05-17 | GamerLegion      | L   | 0.606      | -            | -                | -                | -         |    -6.00 | kraghen, Nodios, Patti, Queenix, salazar |
|           40 |     2342 | 2024-05-17 | Rebels           | L   | 0.605      | -            | -                | -                | -         |    -9.04 | kraghen, Nodios, Patti, Queenix, salazar |
|           39 |     2425 | 2024-05-15 | BLEED            | W   | 0.592      | 0.384        | 0.117 (0.027)    | 0.520 (0.118)    | -         |    16.90 | kraghen, Nodios, Patti, Queenix, salazar |
|           38 |     2650 | 2024-05-07 | Grannys Knockers | L   | 0.537      | -            | -                | -                | -         |   -12.51 | kraghen, Nodios, Patti, Queenix, salazar |
|           37 |     2660 | 2024-05-06 | 500              | W   | 0.532      | -            | -                | -                | -         |     0.77 | kraghen, Nodios, Patti, Queenix, salazar |
|           36 |     2672 | 2024-05-05 | Sashi            | W   | 0.526      | 0.143        | 0.183 (0.014)    | 1.000 (0.075)    | -         |    12.96 | kraghen, Nodios, Patti, Queenix, salazar |
|           35 |     2678 | 2024-05-05 | Kronjyllands     | W   | 0.525      | -            | -                | -                | -         |     0.78 | kraghen, Nodios, Patti, Queenix, salazar |
|           34 |     2708 | 2024-05-03 | AMKAL            | L   | 0.513      | -            | -                | -                | -         |    -4.33 | kraghen, Nodios, Patti, Queenix, salazar |
|           33 |     2737 | 2024-05-02 | HAVU             | W   | 0.506      | -            | -                | -                | -         |     3.15 | kraghen, Nodios, Patti, Queenix, salazar |
|           32 |     2744 | 2024-05-02 | SINNERS          | W   | 0.505      | 0.435        | 0.044 (0.010)    | 0.922 (0.202)    | -         |    10.88 | kraghen, Nodios, Patti, Queenix, salazar |
|           31 |     2779 | 2024-04-30 | AMKAL            | L   | 0.493      | -            | -                | -                | -         |    -4.13 | kraghen, Nodios, Patti, Queenix, salazar |
|           30 |     2806 | 2024-04-29 | kONO             | L   | 0.485      | -            | -                | -                | -         |    -9.56 | kraghen, Nodios, Patti, Queenix, salazar |
|           29 |     2831 | 2024-04-28 | 9 Pandas         | L   | 0.478      | -            | -                | -                | -         |    -7.15 | kraghen, Nodios, Patti, Queenix, salazar |
|           28 |     2880 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.464      | -            | -                | -                | -         |    -7.90 | kraghen, Nodios, Patti, Queenix, salazar |
|           27 |     2941 | 2024-04-23 | Sashi            | L   | 0.445      | -            | -                | -                | -         |    -3.91 | kraghen, Nodios, Patti, Queenix, salazar |
|           26 |     2956 | 2024-04-22 | BLEED            | L   | 0.438      | -            | -                | -                | -         |    -6.44 | kraghen, Nodios, Patti, Queenix, salazar |
|           25 |     2974 | 2024-04-21 | AMKAL            | W   | 0.432      | 0.384        | 0.115 (0.019)    | 0.404 (0.067)    | -         |     9.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           24 |     3011 | 2024-04-20 | Nemiga           | W   | 0.424      | 0.384        | 0.365 (0.059)    | 0.799 (0.130)    | -         |    10.67 | kraghen, Nodios, Patti, Queenix, salazar |
|           23 |     3146 | 2024-04-17 | SINNERS          | W   | 0.404      | 0.384        | 0.044 (0.007)    | 0.922 (0.143)    | -         |     9.64 | kraghen, Nodios, Patti, Queenix, salazar |
|           22 |     3174 | 2024-04-16 | Permitta         | W   | 0.398      | 0.384        | 0.036 (0.006)    | 0.957 (0.147)    | -         |     6.87 | kraghen, Nodios, Patti, Queenix, salazar |
|           21 |     3502 | 2024-04-04 | JANO             | W   | 0.317      | -            | -                | -                | -         |     1.85 | kraghen, Nodios, Patti, Queenix, salazar |
|           20 |     3717 | 2024-03-23 | G2               | L   | 0.239      | -            | -                | -                | -         |    -0.02 | kraghen, Nodios, Patti, Queenix, salazar |
|           19 |     3726 | 2024-03-22 | FURIA            | W   | 0.234      | 1.000        | 0.301 (0.070)    | 0.506 (0.118)    | 1 (0.234) |     7.25 | kraghen, Nodios, Patti, Queenix, salazar |
|           18 |     3747 | 2024-03-21 | Cloud9           | L   | 0.226      | -            | -                | -                | -         |    -3.21 | kraghen, Nodios, Patti, Queenix, salazar |
|           17 |     3762 | 2024-03-21 | MOUZ             | L   | 0.224      | -            | -                | -                | -         |    -0.05 | kraghen, Nodios, Patti, Queenix, salazar |
|           16 |     3793 | 2024-03-19 | Imperial         | W   | 0.213      | 0.143        | 0.213 (0.006)    | -                | 1 (0.213) |     5.47 | kraghen, Nodios, Patti, Queenix, salazar |
|           15 |     3807 | 2024-03-18 | Lynn Vision      | W   | 0.205      | -            | -                | -                | 1 (0.205) |     3.98 | kraghen, Nodios, Patti, Queenix, salazar |
|           14 |     3828 | 2024-03-17 | The MongolZ      | W   | 0.199      | 0.143        | 1.000 (0.028)    | -                | 1 (0.199) |     6.26 | kraghen, Nodios, Patti, Queenix, salazar |
|           13 |     3839 | 2024-03-17 | Cloud9           | L   | 0.198      | -            | -                | -                | -         |    -2.80 | kraghen, Nodios, Patti, Queenix, salazar |
|           12 |     4174 | 2024-03-04 | BetBoom          | L   | 0.111      | -            | -                | -                | -         |    -0.33 | kraghen, Nodios, Patti, Queenix, salazar |
|           11 |     4180 | 2024-03-03 | ex-Preasy        | L   | 0.107      | -            | -                | -                | -         |    -2.42 | kraghen, Nodios, Patti, Queenix, salazar |
|           10 |     4186 | 2024-03-03 | fnatic           | W   | 0.106      | -            | -                | -                | -         |     3.20 | kraghen, Nodios, Patti, Queenix, salazar |
|            9 |     4198 | 2024-03-03 | SINNERS          | W   | 0.106      | -            | -                | -                | -         |     2.57 | kraghen, Nodios, Patti, Queenix, salazar |
|            8 |     4203 | 2024-03-03 | Monte            | W   | 0.104      | -            | -                | -                | -         |     2.25 | kraghen, Nodios, Patti, Queenix, salazar |
|            7 |     4220 | 2024-03-02 | PARIVISION       | W   | 0.098      | -            | -                | -                | -         |     2.37 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     4245 | 2024-02-29 | 3DMAX            | L   | 0.087      | -            | -                | -                | -         |    -0.05 | kraghen, Nodios, Patti, Queenix, salazar |
|            5 |     4390 | 2024-02-22 | ex-Guild Eagles  | W   | 0.039      | -            | -                | -                | 1 (0.039) |     0.40 | kraghen, Nodios, Patti, Queenix, salazar |
|            4 |     4417 | 2024-02-21 | Apeks            | L   | 0.032      | -            | -                | -                | -         |    -0.58 | kraghen, Nodios, Patti, Queenix, salazar |
|            3 |     4448 | 2024-02-20 | OG               | W   | 0.024      | -            | -                | -                | 1 (0.024) |     0.43 | kraghen, Nodios, Patti, Queenix, salazar |
|            2 |     4463 | 2024-02-19 | MOUZ             | L   | 0.020      | -            | -                | -                | -         |    -0.00 | kraghen, Nodios, Patti, Queenix, salazar |
|            1 |     4474 | 2024-02-19 | Monte            | W   | 0.018      | -            | -                | -                | 1 (0.018) |     0.39 | kraghen, Nodios, Patti, Queenix, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,213.97)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.613 | $1,000.00      | $612.94         |
| 2024-05-04 |      0.519 | $2,000.00      | $1,038.40       |
| 2024-05-02 |      0.506 | $1,000.00      | $506.09         |
| 2024-04-22 |      0.438 | $5,000.00      | $2,191.11       |
| 2024-03-31 |      0.293 | $20,000.00     | $5,865.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
