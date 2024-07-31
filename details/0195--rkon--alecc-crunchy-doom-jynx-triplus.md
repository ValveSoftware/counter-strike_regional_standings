### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Global Rank: [195](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
<br />
Final Rank Value:  518.5<br />
<br />
Final Rank Value (518.5) = Starting Rank Value (504.7) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.7
- 400 + ( ( 0.051 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 504.7


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
|           10 |     3190 | 2024-03-27 | DXA         | W   | 0.357      | 0.333        | 0.002 (0.000)    | 0.228 (0.027)    | 0 (0.000) |     8.23 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|            9 |     3195 | 2024-03-27 | DXA         | L   | 0.357      | -            | -                | -                | -         |    -3.05 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|            8 |     3463 | 2024-03-13 | KZG         | W   | 0.264      | 0.333        | 0.006 (0.000)    | 0.113 (0.010)    | 0 (0.000) |     6.20 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            7 |     3469 | 2024-03-13 | KZG         | L   | 0.264      | -            | -                | -                | -         |    -2.14 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            6 |     3810 | 2024-02-27 | Vantage     | L   | 0.164      | -            | -                | -                | -         |    -1.59 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     3813 | 2024-02-27 | Vantage     | W   | 0.164      | 0.333        | 0.002 (0.000)    | 0.076 (0.004)    | 0 (0.000) |     3.60 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            4 |     3942 | 2024-02-21 | Canon Event | W   | 0.124      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.00 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            3 |     3946 | 2024-02-21 | Canon Event | W   | 0.124      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.02 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            2 |     3974 | 2024-02-20 | Mindfreak   | L   | 0.117      | -            | -                | -                | -         |    -0.97 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            1 |     4166 | 2024-02-13 | KZG         | L   | 0.070      | -            | -                | -                | -         |    -0.53 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
