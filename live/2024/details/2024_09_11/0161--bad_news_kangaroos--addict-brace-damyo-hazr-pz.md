### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Global Rank: [161](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_11.md)<br />
Regional Rank: [14]( ../../standings_asia_2024_09_11.md)<br />
<br />
Final Rank Value:  669.0<br />
<br />
Final Rank Value (669.0) = Starting Rank Value (658.9) + Head To Head Adjustments (10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.9
- 400 + ( ( 0.133 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 658.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     3640 | 2024-05-03 | FURIA       | L   | 0.326      | -            | -                | -                | -         |    -0.04 | ADDICT, BRACE, damyo, hazr, pz      |
|           17 |     3685 | 2024-05-01 | ENCE        | L   | 0.313      | -            | -                | -                | -         |    -0.46 | ADDICT, BRACE, damyo, hazr, pz      |
|           16 |     3718 | 2024-04-30 | MOUZ        | L   | 0.305      | -            | -                | -                | -         |    -0.01 | ADDICT, BRACE, damyo, hazr, pz      |
|           15 |     3940 | 2024-04-20 | FlyQuest    | L   | 0.238      | -            | -                | -                | -         |    -0.91 | ADDICT, BRACE, damyo, hazr, pz      |
|           14 |     3944 | 2024-04-20 | Rooster     | W   | 0.238      | 0.143        | 0.007 (0.000)    | 0.332 (0.011)    | 0 (0.000) |     4.45 | ADDICT, BRACE, damyo, hazr, pz      |
|           13 |     3989 | 2024-04-19 | Mindfreak   | W   | 0.232      | 0.143        | 0.003 (0.000)    | 0.220 (0.007)    | 0 (0.000) |     3.79 | ADDICT, BRACE, damyo, hazr, pz      |
|           12 |     3992 | 2024-04-19 | Rooster     | L   | 0.231      | -            | -                | -                | -         |    -2.95 | ADDICT, BRACE, damyo, hazr, pz      |
|           11 |     4241 | 2024-04-10 | Rooster     | W   | 0.171      | 0.333        | 0.007 (0.000)    | 0.332 (0.019)    | 0 (0.000) |     3.21 | ADDICT, BRACE, damyo, hazr, pz      |
|           10 |     4251 | 2024-04-10 | Rooster     | L   | 0.171      | -            | -                | -                | -         |    -2.21 | ADDICT, BRACE, damyo, hazr, pz      |
|            9 |     4476 | 2024-04-03 | DXA         | W   | 0.125      | 0.333        | 0.001 (0.000)    | 0.211 (0.009)    | 0 (0.000) |     1.86 | ADDICT, BRACE, damyo, hazr, pz      |
|            8 |     4480 | 2024-04-03 | DXA         | W   | 0.124      | 0.333        | 0.001 (0.000)    | 0.211 (0.009)    | 0 (0.000) |     1.88 | ADDICT, BRACE, damyo, hazr, pz      |
|            7 |     4600 | 2024-03-27 | Mindfreak   | L   | 0.078      | -            | -                | -                | -         |    -1.36 | ADDICT, BRACE, damyo, hazr, pz      |
|            6 |     4607 | 2024-03-27 | Mindfreak   | W   | 0.078      | 0.333        | 0.003 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     1.11 | ADDICT, BRACE, damyo, hazr, pz      |
|            5 |     4650 | 2024-03-23 | DXA         | W   | 0.051      | 0.315        | 0.001 (0.000)    | 0.211 (0.003)    | 1 (0.051) |     0.78 | ADDICT, BRACE, damyo, hazr, pz      |
|            4 |     4653 | 2024-03-23 | VexX        | W   | 0.051      | 0.315        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.051) |     0.46 | ADDICT, BRACE, damyo, hazr, pz      |
|            3 |     4711 | 2024-03-20 | Canon Event | W   | 0.031      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.29 | ADDICT, BRACE, damyo, hazr, pz      |
|            2 |     4712 | 2024-03-20 | Canon Event | W   | 0.031      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.29 | ADDICT, BRACE, damyo, hazr, pz      |
|            1 |     4782 | 2024-03-16 | Gods Reign  | L   | 0.004      | -            | -                | -                | -         |    -0.06 | ADDICT, BRACE, hazr, pz, yourwombat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,150.57)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.571 | $1,050.00      | $599.59         |
| 2024-05-12 |      0.387 | $3,500.00      | $1,353.36       |
| 2024-03-23 |      0.051 | $3,308.00      | $170.30         |
| 2024-03-16 |      0.005 | $5,000.00      | $27.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
