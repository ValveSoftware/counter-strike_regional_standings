### Roster Details<br />
Team Name: Spray Jutsu<br />
Roster: dosikzz, ElayDzha, for2na, OxygeN, rinn<br />
Global Rank: [101](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [62]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  728.1<br />
<br />
Final Rank Value (728.1) = Starting Rank Value (703.2) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.2
- 400 + ( ( 0.167 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 703.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1019 | 2025-03-18 | Garden Garage    | L   | 0.881      | -            | -                | -                | -         |   -16.29 | dosikzz, ElayDzha, for2na, OxygeN, rinn |
|            5 |     1054 | 2025-03-16 | Delta            | W   | 0.868      | 0.266        | 0.015 (0.004)    | 0.154 (0.036)    | 1 (0.868) |    16.27 | 1Drezz, dosikzz, ElayDzha, OxygeN, rinn |
|            4 |     1142 | 2025-03-11 | Partizan         | L   | 0.834      | -            | -                | -                | -         |    -6.82 | dosikzz, ElayDzha, for2na, OxygeN, rinn |
|            3 |     1211 | 2025-03-09 | NEVERMORE        | W   | 0.821      | 0.372        | 0.011 (0.003)    | 0.329 (0.101)    | 0 (0.000) |    12.39 | dosikzz, ElayDzha, for2na, OxygeN, rinn |
|            2 |     1414 | 2025-03-06 | K27              | W   | 0.801      | 0.372        | 0.002 (0.001)    | 0.114 (0.034)    | 0 (0.000) |     9.79 | dosikzz, ElayDzha, for2na, OxygeN, rinn |
|            1 |     1466 | 2025-03-05 | Wildcard Academy | W   | 0.793      | 0.372        | 0.002 (0.001)    | 0.128 (0.038)    | 0 (0.000) |     9.52 | dosikzz, ElayDzha, for2na, OxygeN, rinn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,202.19)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      0.907 | $1,250.00      | $1,134.10       |
| 2025-03-16 |      0.868 | $1,230.00      | $1,068.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
