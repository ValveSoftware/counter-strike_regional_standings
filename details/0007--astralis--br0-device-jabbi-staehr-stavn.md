### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1826.3<br />
<br />
Final Rank Value (1826.3) = Starting Rank Value (1923.8) + Head To Head Adjustments (-97.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.792[<sup>1</sup>](#table2)
- Bounty Collected: 0.705[<sup>2</sup>](#table1)
- Opponent Network: 0.434[<sup>2</sup>](#table1)
- LAN Wins: 0.960[<sup>2</sup>](#table1)

The average of these factors is 0.722<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1923.8
- 400 + ( ( 0.722 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1923.8


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
|           40 |      215 | 2024-06-14 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -20.15 | br0, device, jabbi, Staehr, stavn    |
|           39 |      274 | 2024-06-13 | SAW               | W   | 1.000      | 0.729        | -                | 0.526 (0.384)    | 1 (1.000) |     0.98 | br0, device, jabbi, Staehr, stavn    |
|           38 |      297 | 2024-06-12 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -14.77 | br0, device, jabbi, Staehr, stavn    |
|           37 |      455 | 2024-06-08 | The MongolZ       | L   | 0.979      | -            | -                | -                | -         |   -13.67 | br0, device, jabbi, Staehr, stavn    |
|           36 |      506 | 2024-06-07 | BetBoom           | W   | 0.973      | 0.715        | 0.406 (0.282)    | 0.745 (0.519)    | 1 (0.973) |     4.30 | br0, device, jabbi, Staehr, stavn    |
|           35 |      567 | 2024-06-06 | The MongolZ       | W   | 0.967      | 0.715        | 1.000 (0.691)    | 0.692 (0.478)    | 1 (0.967) |    17.33 | br0, device, jabbi, Staehr, stavn    |
|           34 |      587 | 2024-06-06 | ENCE              | W   | 0.965      | 0.715        | 0.216 (0.149)    | 0.399 (0.275)    | 1 (0.965) |     1.84 | br0, device, jabbi, Staehr, stavn    |
|           33 |      593 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.965      | -            | -                | -                | -         |   -22.89 | br0, device, jabbi, Staehr, stavn    |
|           32 |      638 | 2024-06-05 | Sashi             | L   | 0.959      | -            | -                | -                | -         |   -29.34 | br0, device, jabbi, Staehr, stavn    |
|           31 |      650 | 2024-06-05 | HEROIC            | W   | 0.957      | 0.715        | 0.338 (0.231)    | 0.480 (0.329)    | 1 (0.957) |     8.39 | br0, device, jabbi, Staehr, stavn    |
|           30 |      997 | 2024-05-22 | Liquid            | L   | 0.865      | -            | -                | -                | -         |   -22.51 | br0, device, jabbi, Staehr, stavn    |
|           29 |     1039 | 2024-05-21 | Aurora            | W   | 0.859      | 0.769        | 0.518 (0.342)    | 0.853 (0.563)    | -         |     2.98 | br0, device, jabbi, Staehr, stavn    |
|           28 |     1069 | 2024-05-20 | BetBoom           | W   | 0.853      | 0.769        | 0.406 (0.266)    | 0.745 (0.489)    | -         |     2.53 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1092 | 2024-05-19 | BIG               | W   | 0.847      | -            | -                | -                | -         |     1.43 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1384 | 2024-05-11 | Vitality          | L   | 0.793      | -            | -                | -                | -         |   -10.13 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1405 | 2024-05-10 | Liquid            | W   | 0.786      | 0.889        | 0.494 (0.345)    | 0.546 (0.382)    | 1 (0.786) |     3.76 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1671 | 2024-04-27 | 3DMAX             | W   | 0.699      | 0.889        | -                | 1.000 (0.622)    | 1 (0.699) |     0.57 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1741 | 2024-04-24 | FaZe              | W   | 0.680      | 0.889        | 0.936 (0.566)    | 0.491 (0.297)    | 1 (0.680) |    11.21 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1762 | 2024-04-23 | Eternal Fire      | W   | 0.673      | 0.889        | 1.000 (0.598)    | -                | 1 (0.673) |     6.40 | br0, device, jabbi, Staehr, stavn    |
|           21 |     2048 | 2024-04-13 | FaZe              | L   | 0.605      | -            | -                | -                | -         |    -9.40 | br0, device, jabbi, Staehr, stavn    |
|           20 |     2145 | 2024-04-10 | Virtus.pro        | W   | 0.584      | -            | -                | -                | 1 (0.584) |     5.50 | br0, device, jabbi, Staehr, stavn    |
|           19 |     2197 | 2024-04-09 | FaZe              | W   | 0.578      | 0.624        | 0.936 (0.338)    | -                | -         |     9.45 | br0, device, jabbi, Staehr, stavn    |
|           18 |     2229 | 2024-04-08 | Steel Helmet      | W   | 0.571      | -            | -                | -                | -         |     0.02 | br0, device, jabbi, Staehr, stavn    |
|           17 |     3198 | 2024-02-23 | 9 Pandas          | L   | 0.272      | -            | -                | -                | -         |    -8.46 | blameF, device, jabbi, Staehr, stavn |
|           16 |     3217 | 2024-02-22 | ENCE              | L   | 0.265      | -            | -                | -                | -         |    -7.58 | blameF, device, jabbi, Staehr, stavn |
|           15 |     3244 | 2024-02-21 | Monte             | W   | 0.259      | -            | -                | -                | -         |     0.24 | blameF, device, jabbi, Staehr, stavn |
|           14 |     3272 | 2024-02-20 | HEROIC            | L   | 0.252      | -            | -                | -                | -         |    -5.47 | blameF, device, jabbi, Staehr, stavn |
|           13 |     3285 | 2024-02-19 | Spirit            | L   | 0.247      | -            | -                | -                | -         |    -2.93 | blameF, device, jabbi, Staehr, stavn |
|           12 |     3295 | 2024-02-19 | Romania           | W   | 0.246      | -            | -                | -                | -         |     0.02 | blameF, device, jabbi, Staehr, stavn |
|           11 |     3653 | 2024-02-01 | ENCE              | L   | 0.128      | -            | -                | -                | -         |    -3.69 | blameF, device, jabbi, Staehr, stavn |
|           10 |     3682 | 2024-01-31 | HEROIC            | L   | 0.119      | -            | -                | -                | -         |    -2.64 | blameF, device, jabbi, Staehr, stavn |
|            9 |     3719 | 2024-01-28 | BIG               | W   | 0.100      | -            | -                | -                | -         |     0.17 | blameF, device, jabbi, Staehr, stavn |
|            8 |     3735 | 2024-01-27 | Vitality          | L   | 0.092      | -            | -                | -                | -         |    -1.24 | blameF, device, jabbi, Staehr, stavn |
|            7 |     3801 | 2024-01-23 | Vitality          | W   | 0.067      | -            | -                | -                | -         |     1.22 | blameF, device, jabbi, Staehr, stavn |
|            6 |     3828 | 2024-01-22 | Falcons           | W   | 0.060      | -            | -                | -                | -         |     0.25 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3898 | 2024-01-20 | PERA              | W   | 0.046      | -            | -                | -                | -         |     0.01 | blameF, device, jabbi, Staehr, stavn |
|            4 |     3948 | 2024-01-19 | AMKAL             | L   | 0.041      | -            | -                | -                | -         |    -1.26 | blameF, device, jabbi, Staehr, stavn |
|            3 |     4013 | 2024-01-18 | ex-Preasy         | W   | 0.033      | -            | -                | -                | -         |     0.00 | blameF, device, jabbi, Staehr, stavn |
|            2 |     4016 | 2024-01-18 | Enterprise        | W   | 0.033      | -            | -                | -                | -         |     0.01 | blameF, device, jabbi, Staehr, stavn |
|            1 |     4185 | 2024-01-14 | Ninjas in Pyjamas | W   | 0.006      | -            | -                | -                | -         |     0.00 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($141,111.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.55) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-09 |      0.987 | $28,000.00     | $27,624.30      |
| 2024-05-23 |      0.873 | $50,000.00     | $43,668.37      |
| 2024-05-12 |      0.800 | $45,000.00     | $35,993.50      |
| 2024-04-14 |      0.612 | $20,000.00     | $12,234.65      |
| 2024-02-02 |      0.134 | $2,500.00      | $336.22         |
| 2024-01-28 |      0.100 | $12,500.00     | $1,253.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
