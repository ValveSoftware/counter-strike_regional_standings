### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [24]( ../standings_asia.md)<br />
Final Rank Value:  543.1<br />
<br />
Final Rank Value (543.1) = Starting Rank Value (518.1) + Head To Head Adjustments (25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.1
- 400 + ( ( 0.058 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 518.1


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
|           14 |     2363 | 2024-03-27 | DXA         | W   | 0.647      | 0.333        | 0.004 (0.001)    | 0.179 (0.039)    | 0 (0.000) |    14.31 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           13 |     2368 | 2024-03-27 | DXA         | L   | 0.647      | -            | -                | -                | -         |    -6.05 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           12 |     2636 | 2024-03-13 | KZG         | W   | 0.554      | 0.333        | 0.009 (0.002)    | 0.142 (0.026)    | 0 (0.000) |    12.35 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           11 |     2642 | 2024-03-13 | KZG         | L   | 0.554      | -            | -                | -                | -         |    -5.11 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           10 |     2983 | 2024-02-27 | Vantage     | L   | 0.454      | -            | -                | -                | -         |    -4.59 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            9 |     2986 | 2024-02-27 | Vantage     | W   | 0.453      | 0.333        | 0.003 (0.000)    | 0.166 (0.025)    | 0 (0.000) |     9.93 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            8 |     3115 | 2024-02-21 | Canon Event | W   | 0.414      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.39 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            7 |     3119 | 2024-02-21 | Canon Event | W   | 0.414      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.62 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            6 |     3147 | 2024-02-20 | Mindfreak   | L   | 0.407      | -            | -                | -                | -         |    -3.01 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     3339 | 2024-02-13 | KZG         | L   | 0.360      | -            | -                | -                | -         |    -2.74 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |
|            4 |     3790 | 2024-01-19 | DXA         | L   | 0.199      | -            | -                | -                | -         |    -4.15 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            3 |     3854 | 2024-01-18 | FlyQuest    | L   | 0.192      | -            | -                | -                | -         |    -0.05 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            2 |     4092 | 2024-01-13 | Mindfreak   | L   | 0.153      | -            | -                | -                | -         |    -2.48 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            1 |     4093 | 2024-01-13 | DXA         | W   | 0.153      | 0.143        | 0.004 (0.000)    | 0.179 (0.004)    | 0 (0.000) |     3.58 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
