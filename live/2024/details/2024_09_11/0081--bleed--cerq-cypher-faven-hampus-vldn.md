### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [81](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [58]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  907.8<br />
<br />
Final Rank Value (907.8) = Starting Rank Value (835.5) + Head To Head Adjustments (72.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.5
- 400 + ( ( 0.224 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 835.5


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
|           32 |     3497 | 2024-05-11 | B8                | L   | 0.378      | -            | -                | -                | -         |    -3.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     3525 | 2024-05-09 | Sampi             | W   | 0.367      | 0.435        | 0.032 (0.005)    | 1.000 (0.160)    | 0 (0.000) |     6.03 | CYPHER, draken, faveN, hampus, VLDN |
|           30 |     3567 | 2024-05-07 | 1WIN              | L   | 0.353      | -            | -                | -                | -         |    -5.89 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     3591 | 2024-05-06 | Insilio           | W   | 0.345      | 0.396        | -                | 0.706 (0.097)    | 0 (0.000) |     5.67 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     3657 | 2024-05-02 | AMKAL             | L   | 0.321      | -            | -                | -                | -         |    -2.63 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     3691 | 2024-05-01 | MOUZ NXT          | L   | 0.312      | -            | -                | -                | -         |    -3.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     3723 | 2024-04-30 | Permitta          | W   | 0.305      | 0.384        | -                | 0.936 (0.110)    | 0 (0.000) |     5.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     3746 | 2024-04-28 | B8                | W   | 0.294      | 0.500        | 0.247 (0.036)    | 1.000 (0.147)    | 0 (0.000) |     6.64 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     3797 | 2024-04-26 | ex-Guild Eagles   | W   | 0.280      | -            | -                | -                | 0 (0.000) |     2.74 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     3805 | 2024-04-26 | DMS               | W   | 0.279      | -            | -                | -                | 0 (0.000) |     4.03 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     3845 | 2024-04-24 | Permitta          | W   | 0.267      | 0.435        | -                | 0.936 (0.109)    | 0 (0.000) |     4.94 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     3848 | 2024-04-24 | Nemiga            | L   | 0.266      | -            | -                | -                | -         |    -1.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     3864 | 2024-04-23 | B8                | W   | 0.260      | 0.500        | 0.247 (0.032)    | 1.000 (0.130)    | 0 (0.000) |     6.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     3873 | 2024-04-23 | Sashi             | L   | 0.259      | -            | -                | -                | -         |    -2.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     3882 | 2024-04-22 | Sangal            | W   | 0.253      | 0.500        | 0.289 (0.037)    | 0.847 (0.107)    | 0 (0.000) |     7.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     3884 | 2024-04-22 | Gaimin Gladiators | W   | 0.252      | -            | -                | -                | 0 (0.000) |     4.50 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     3899 | 2024-04-21 | Illuminar         | W   | 0.247      | -            | -                | -                | -         |     0.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     3905 | 2024-04-21 | BIG               | W   | 0.245      | 0.384        | 0.145 (0.014)    | -                | -         |     6.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3929 | 2024-04-20 | MOUZ NXT          | W   | 0.240      | 0.500        | 0.110 (0.013)    | 0.812 (0.097)    | -         |     5.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3985 | 2024-04-19 | Sampi             | W   | 0.232      | 0.384        | -                | 1.000 (0.089)    | -         |     4.26 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     4042 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.225      | 0.500        | 0.103 (0.012)    | 0.812 (0.091)    | -         |     5.31 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4066 | 2024-04-17 | 3DMAX             | L   | 0.219      | -            | -                | -                | -         |    -0.06 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4094 | 2024-04-16 | KOI               | W   | 0.214      | 0.384        | 0.053 (0.004)    | -                | -         |     4.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4106 | 2024-04-16 | SINNERS           | W   | 0.211      | 0.384        | 0.092 (0.008)    | -                | -         |     5.74 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4284 | 2024-04-09 | Alliance          | W   | 0.167      | -            | -                | -                | -         |     2.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4297 | 2024-04-09 | HAVU              | W   | 0.165      | -            | -                | -                | -         |     0.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4378 | 2024-04-05 | BetBoom           | L   | 0.140      | -            | -                | -                | -         |    -0.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4381 | 2024-04-05 | Alliance          | W   | 0.139      | -            | -                | -                | -         |     2.16 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4422 | 2024-04-04 | Benched Heroes    | W   | 0.133      | -            | -                | -                | -         |     0.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4428 | 2024-04-04 | BetBoom           | L   | 0.132      | -            | -                | -                | -         |    -0.46 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     4497 | 2024-04-02 | Passion UA        | W   | 0.120      | 0.384        | 0.164 (0.008)    | -                | -         |     2.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     4520 | 2024-04-01 | Enterprise        | L   | 0.112      | -            | -                | -                | -         |    -1.59 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,694.77)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.427 | $500.00        | $213.56         |
| 2024-05-12 |      0.387 | $2,000.00      | $774.23         |
| 2024-04-24 |      0.266 | $25,000.00     | $6,658.85       |
| 2024-04-22 |      0.252 | $20,000.00     | $5,048.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
