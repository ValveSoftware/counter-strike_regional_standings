### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [23]( ../standings_asia.md)<br />
Final Rank Value:  536.7<br />
<br />
Final Rank Value (536.7) = Starting Rank Value (516.4) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.4
- 400 + ( ( 0.055 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 516.4


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
|           12 |     2496 | 2024-03-27 | DXA         | W   | 0.492      | 0.333        | 0.004 (0.001)    | 0.156 (0.026)    | 0 (0.000) |    11.15 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           11 |     2501 | 2024-03-27 | DXA         | L   | 0.491      | -            | -                | -                | -         |    -4.35 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           10 |     2769 | 2024-03-13 | KZG         | W   | 0.398      | 0.333        | 0.009 (0.001)    | 0.119 (0.016)    | 0 (0.000) |     9.17 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            9 |     2775 | 2024-03-13 | KZG         | L   | 0.398      | -            | -                | -                | -         |    -3.40 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|            8 |     3116 | 2024-02-27 | Vantage     | L   | 0.298      | -            | -                | -                | -         |    -2.83 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            7 |     3119 | 2024-02-27 | Vantage     | W   | 0.298      | 0.333        | 0.003 (0.000)    | 0.127 (0.013)    | 0 (0.000) |     6.67 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            6 |     3248 | 2024-02-21 | Canon Event | W   | 0.258      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.10 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     3252 | 2024-02-21 | Canon Event | W   | 0.258      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.19 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            4 |     3280 | 2024-02-20 | Mindfreak   | L   | 0.251      | -            | -                | -                | -         |    -1.86 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            3 |     3472 | 2024-02-13 | KZG         | L   | 0.204      | -            | -                | -                | -         |    -1.52 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |
|            2 |     3923 | 2024-01-19 | DXA         | L   | 0.044      | -            | -                | -                | -         |    -0.91 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            1 |     3987 | 2024-01-18 | FlyQuest    | L   | 0.037      | -            | -                | -                | -         |    -0.01 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
