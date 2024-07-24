### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  523.6<br />
<br />
Final Rank Value (523.6) = Starting Rank Value (507.0) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.0
- 400 + ( ( 0.053 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 507.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2948 | 2024-03-27 | DXA         | W   | 0.405      | 0.333        | 0.003 (0.000)    | 0.217 (0.029)    | 0 (0.000) |     9.33 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|            9 |     2953 | 2024-03-27 | DXA         | L   | 0.404      | -            | -                | -                | -         |    -3.44 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|            8 |     3221 | 2024-03-13 | KZG         | W   | 0.311      | 0.333        | 0.007 (0.001)    | 0.130 (0.013)    | 0 (0.000) |     7.30 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            7 |     3227 | 2024-03-13 | KZG         | L   | 0.311      | -            | -                | -                | -         |    -2.53 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            6 |     3568 | 2024-02-27 | Vantage     | L   | 0.211      | -            | -                | -                | -         |    -2.04 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     3571 | 2024-02-27 | Vantage     | W   | 0.211      | 0.333        | 0.003 (0.000)    | 0.096 (0.007)    | 0 (0.000) |     4.66 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            4 |     3700 | 2024-02-21 | Canon Event | W   | 0.171      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.75 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            3 |     3704 | 2024-02-21 | Canon Event | W   | 0.171      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.79 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            2 |     3732 | 2024-02-20 | Mindfreak   | L   | 0.164      | -            | -                | -                | -         |    -1.34 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            1 |     3924 | 2024-02-13 | KZG         | L   | 0.117      | -            | -                | -                | -         |    -0.86 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
