### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [94](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [69]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  888.2<br />
<br />
Final Rank Value (888.2) = Starting Rank Value (822.8) + Head To Head Adjustments (65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.8
- 400 + ( ( 0.216 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 822.8


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
|           32 |     3702 | 2024-05-11 | B8                | L   | 0.332      | -            | -                | -                | -         |    -2.55 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     3730 | 2024-05-09 | Sampi             | W   | 0.321      | 0.435        | 0.036 (0.005)    | 1.000 (0.140)    | 0 (0.000) |     5.91 | CYPHER, draken, faveN, hampus, VLDN |
|           30 |     3772 | 2024-05-07 | 1WIN              | L   | 0.308      | -            | -                | -                | -         |    -4.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     3796 | 2024-05-06 | Insilio           | W   | 0.299      | 0.396        | 0.041 (0.005)    | 0.799 (0.095)    | 0 (0.000) |     5.87 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     3862 | 2024-05-02 | AMKAL             | L   | 0.275      | -            | -                | -                | -         |    -1.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     3896 | 2024-05-01 | MOUZ NXT          | L   | 0.266      | -            | -                | -                | -         |    -3.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     3928 | 2024-04-30 | Permitta          | W   | 0.259      | 0.384        | -                | 0.979 (0.097)    | 0 (0.000) |     4.78 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     3951 | 2024-04-28 | B8                | W   | 0.248      | 0.500        | 0.252 (0.031)    | 1.000 (0.124)    | 0 (0.000) |     5.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     4002 | 2024-04-26 | ex-Guild Eagles   | W   | 0.234      | -            | -                | -                | 0 (0.000) |     2.40 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     4010 | 2024-04-26 | DMS               | W   | 0.233      | -            | -                | -                | 0 (0.000) |     3.64 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     4050 | 2024-04-24 | Permitta          | W   | 0.221      | 0.435        | -                | 0.979 (0.094)    | 0 (0.000) |     4.35 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     4053 | 2024-04-24 | Nemiga            | L   | 0.220      | -            | -                | -                | -         |    -1.13 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     4069 | 2024-04-23 | B8                | W   | 0.214      | 0.500        | 0.252 (0.027)    | 1.000 (0.107)    | 0 (0.000) |     5.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     4078 | 2024-04-23 | Sashi             | L   | 0.213      | -            | -                | -                | -         |    -1.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     4087 | 2024-04-22 | Sangal            | W   | 0.207      | 0.500        | 0.292 (0.030)    | 0.811 (0.084)    | 0 (0.000) |     6.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     4089 | 2024-04-22 | Gaimin Gladiators | W   | 0.206      | -            | -                | -                | 0 (0.000) |     4.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     4104 | 2024-04-21 | Illuminar         | W   | 0.201      | -            | -                | -                | -         |     0.80 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     4110 | 2024-04-21 | BIG               | W   | 0.200      | 0.384        | 0.206 (0.016)    | -                | -         |     6.04 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     4134 | 2024-04-20 | MOUZ NXT          | W   | 0.194      | 0.500        | 0.109 (0.011)    | 0.742 (0.072)    | -         |     4.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     4190 | 2024-04-19 | Sampi             | W   | 0.186      | 0.384        | -                | 1.000 (0.072)    | -         |     3.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     4247 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.179      | 0.500        | 0.110 (0.010)    | 0.792 (0.071)    | -         |     4.41 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4271 | 2024-04-17 | 3DMAX             | L   | 0.173      | -            | -                | -                | -         |    -0.04 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4299 | 2024-04-16 | KOI               | W   | 0.168      | -            | -                | -                | -         |     3.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4311 | 2024-04-16 | SINNERS           | W   | 0.165      | 0.384        | 0.176 (0.011)    | -                | -         |     4.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4489 | 2024-04-09 | Alliance          | W   | 0.121      | -            | -                | -                | -         |     1.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4502 | 2024-04-09 | HAVU              | W   | 0.120      | -            | -                | -                | -         |     0.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4583 | 2024-04-05 | BetBoom           | L   | 0.094      | -            | -                | -                | -         |    -0.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4586 | 2024-04-05 | Alliance          | W   | 0.093      | -            | -                | -                | -         |     1.50 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4627 | 2024-04-04 | Benched Heroes    | W   | 0.087      | -            | -                | -                | -         |     0.23 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4633 | 2024-04-04 | BetBoom           | L   | 0.086      | -            | -                | -                | -         |    -0.30 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     4702 | 2024-04-02 | Passion UA        | W   | 0.074      | 0.384        | 0.174 (0.005)    | -                | -         |     1.79 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     4725 | 2024-04-01 | ex-Enterprise     | L   | 0.066      | -            | -                | -                | -         |    -0.89 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,511.33)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.381 | $500.00        | $190.58         |
| 2024-05-12 |      0.341 | $2,000.00      | $682.29         |
| 2024-04-24 |      0.220 | $25,000.00     | $5,509.67       |
| 2024-04-22 |      0.206 | $20,000.00     | $4,128.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
