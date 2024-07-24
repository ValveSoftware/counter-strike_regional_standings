### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  812.4<br />
<br />
Final Rank Value (812.4) = Starting Rank Value (789.1) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.379[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.1
- 400 + ( ( 0.192 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 789.1


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
|           27 |     1989 | 2024-05-03 | FURIA       | L   | 0.653      | -            | -                | -                | -         |    -0.16 | ADDICT, BRACE, damyo, hazr, pz      |
|           26 |     2034 | 2024-05-01 | ENCE        | L   | 0.640      | -            | -                | -                | -         |    -0.98 | ADDICT, BRACE, damyo, hazr, pz      |
|           25 |     2067 | 2024-04-30 | MOUZ        | L   | 0.632      | -            | -                | -                | -         |    -0.04 | ADDICT, BRACE, damyo, hazr, pz      |
|           24 |     2289 | 2024-04-20 | FlyQuest    | L   | 0.565      | -            | -                | -                | -         |    -1.39 | ADDICT, BRACE, damyo, hazr, pz      |
|           23 |     2293 | 2024-04-20 | Rooster     | W   | 0.564      | 0.143        | 0.014 (0.001)    | 0.298 (0.024)    | 0 (0.000) |     9.30 | ADDICT, BRACE, damyo, hazr, pz      |
|           22 |     2338 | 2024-04-19 | Mindfreak   | W   | 0.558      | 0.143        | 0.005 (0.000)    | 0.210 (0.017)    | 0 (0.000) |     6.50 | ADDICT, BRACE, damyo, hazr, pz      |
|           21 |     2341 | 2024-04-19 | Rooster     | L   | 0.557      | -            | -                | -                | -         |    -8.34 | ADDICT, BRACE, damyo, hazr, pz      |
|           20 |     2590 | 2024-04-10 | Rooster     | W   | 0.498      | 0.333        | 0.014 (0.002)    | 0.298 (0.049)    | 0 (0.000) |     8.23 | ADDICT, BRACE, damyo, hazr, pz      |
|           19 |     2600 | 2024-04-10 | Rooster     | L   | 0.497      | -            | -                | -                | -         |    -7.60 | ADDICT, BRACE, damyo, hazr, pz      |
|           18 |     2825 | 2024-04-03 | DXA         | W   | 0.451      | 0.333        | 0.003 (0.000)    | 0.217 (0.033)    | 0 (0.000) |     4.78 | ADDICT, BRACE, damyo, hazr, pz      |
|           17 |     2829 | 2024-04-03 | DXA         | W   | 0.451      | 0.333        | 0.003 (0.000)    | 0.217 (0.033)    | 0 (0.000) |     4.95 | ADDICT, BRACE, damyo, hazr, pz      |
|           16 |     2949 | 2024-03-27 | Mindfreak   | L   | 0.405      | -            | -                | -                | -         |    -8.63 | ADDICT, BRACE, damyo, hazr, pz      |
|           15 |     2956 | 2024-03-27 | Mindfreak   | W   | 0.404      | 0.333        | 0.005 (0.001)    | 0.067 (0.009)    | 0 (0.000) |     4.16 | ADDICT, BRACE, damyo, hazr, pz      |
|           14 |     2999 | 2024-03-23 | DXA         | W   | 0.378      | 0.315        | 0.003 (0.000)    | 0.217 (0.026)    | 1 (0.378) |     4.31 | ADDICT, BRACE, damyo, hazr, pz      |
|           13 |     3002 | 2024-03-23 | Arcade      | W   | 0.377      | 0.315        | 0.004 (0.000)    | 0.159 (0.019)    | 1 (0.377) |     4.30 | ADDICT, BRACE, damyo, hazr, pz      |
|           12 |     3060 | 2024-03-20 | Canon Event | W   | 0.357      | -            | -                | -                | 0 (0.000) |     1.89 | ADDICT, BRACE, damyo, hazr, pz      |
|           11 |     3061 | 2024-03-20 | Canon Event | W   | 0.357      | -            | -                | -                | -         |     1.92 | ADDICT, BRACE, damyo, hazr, pz      |
|           10 |     3131 | 2024-03-16 | Gods Reign  | L   | 0.331      | -            | -                | -                | -         |    -5.10 | ADDICT, BRACE, hazr, pz, yourwombat |
|            9 |     3152 | 2024-03-15 | GRDX        | W   | 0.324      | 0.432        | 0.003 (0.000)    | -                | 1 (0.324) |     2.01 | ADDICT, BRACE, hazr, pz, yourwombat |
|            8 |     3185 | 2024-03-14 | Aurora      | L   | 0.317      | -            | -                | -                | -         |    -0.11 | ADDICT, BRACE, hazr, pz, yourwombat |
|            7 |     3397 | 2024-03-06 | Vantage     | W   | 0.265      | 0.333        | 0.003 (0.000)    | 0.096 (0.008)    | -         |     2.70 | ADDICT, BRACE, damyo, hazr, pz      |
|            6 |     3399 | 2024-03-06 | Vantage     | W   | 0.264      | 0.333        | -                | 0.096 (0.008)    | -         |     2.75 | ADDICT, BRACE, damyo, hazr, pz      |
|            5 |     3653 | 2024-02-22 | Rooster     | L   | 0.183      | -            | -                | -                | -         |    -2.81 | ADDICT, BRACE, Hatz, hazr, pz       |
|            4 |     3672 | 2024-02-22 | Vantage     | W   | 0.178      | -            | -                | -                | -         |     1.88 | ADDICT, BRACE, Hatz, hazr, pz       |
|            3 |     3674 | 2024-02-21 | FlyQuest    | L   | 0.177      | -            | -                | -                | -         |    -0.41 | ADDICT, BRACE, Hatz, hazr, pz       |
|            2 |     3699 | 2024-02-21 | FlyQuest    | L   | 0.171      | -            | -                | -                | -         |    -0.40 | ADDICT, BRACE, Hatz, hazr, pz       |
|            1 |     3703 | 2024-02-21 | FlyQuest    | L   | 0.171      | -            | -                | -                | -         |    -0.40 | ADDICT, BRACE, Hatz, hazr, pz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,346.74)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.897 | $1,050.00      | $942.26         |
| 2024-05-12 |      0.713 | $3,500.00      | $2,495.57       |
| 2024-03-23 |      0.378 | $3,308.00      | $1,249.85       |
| 2024-03-16 |      0.332 | $5,000.00      | $1,659.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
