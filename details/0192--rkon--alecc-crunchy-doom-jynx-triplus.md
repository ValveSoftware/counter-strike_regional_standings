### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  536.5<br />
<br />
Final Rank Value (536.5) = Starting Rank Value (517.1) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.1
- 400 + ( ( 0.055 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 517.1


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
|           11 |     2660 | 2024-03-27 | DXA         | W   | 0.452      | 0.333        | 0.004 (0.001)    | 0.187 (0.028)    | 0 (0.000) |    10.39 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           10 |     2665 | 2024-03-27 | DXA         | L   | 0.452      | -            | -                | -                | -         |    -3.86 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|            9 |     2933 | 2024-03-13 | KZG         | W   | 0.359      | 0.333        | 0.009 (0.001)    | 0.108 (0.013)    | 0 (0.000) |     8.33 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            8 |     2939 | 2024-03-13 | KZG         | L   | 0.358      | -            | -                | -                | -         |    -2.99 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            7 |     3280 | 2024-02-27 | Vantage     | L   | 0.258      | -            | -                | -                | -         |    -2.40 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            6 |     3283 | 2024-02-27 | Vantage     | W   | 0.258      | 0.333        | 0.003 (0.000)    | 0.113 (0.010)    | 0 (0.000) |     5.82 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     3412 | 2024-02-21 | Canon Event | W   | 0.219      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.49 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            4 |     3416 | 2024-02-21 | Canon Event | W   | 0.218      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.55 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            3 |     3444 | 2024-02-20 | Mindfreak   | L   | 0.211      | -            | -                | -                | -         |    -1.62 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            2 |     3636 | 2024-02-13 | KZG         | L   | 0.165      | -            | -                | -                | -         |    -1.22 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |
|            1 |     4087 | 2024-01-19 | DXA         | L   | 0.004      | -            | -                | -                | -         |    -0.09 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
