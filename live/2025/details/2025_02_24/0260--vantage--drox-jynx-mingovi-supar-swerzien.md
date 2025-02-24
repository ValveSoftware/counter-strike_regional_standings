### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, Mingovi, supar, swerzieN<br />
Global Rank: [260](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_24.md)<br />
Regional Rank: [34]( ../../standings_asia_2025_02_24.md)<br />
<br />
Final Rank Value:  513.1<br />
<br />
Final Rank Value (513.1) = Starting Rank Value (486.5) + Head To Head Adjustments (26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.5
- 400 + ( ( 0.045 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 486.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      184 | 2025-02-14 | Housebets      | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.163 (0.023)    | 0 (0.000) |    19.11 | Drox, Jynx, Mingovi, supar, swerzieN |
|            8 |      187 | 2025-02-14 | MANTRA         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.087 (0.012)    | 0 (0.000) |    19.55 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |     2278 | 2024-10-07 | Housebets      | L   | 0.265      | -            | -                | -                | -         |    -2.73 | alecc, Drox, Jynx, Mingovi, supar    |
|            6 |     2280 | 2024-10-07 | Housebets      | L   | 0.265      | -            | -                | -                | -         |    -2.79 | alecc, Drox, Jynx, Mingovi, supar    |
|            5 |     2324 | 2024-10-05 | The Art of War | L   | 0.254      | -            | -                | -                | -         |    -2.60 | alecc, Drox, Jynx, Mingovi, supar    |
|            4 |     2355 | 2024-10-05 | MANTRA         | W   | 0.249      | 0.143        | 0.000 (0.000)    | 0.087 (0.003)    | 0 (0.000) |     5.14 | alecc, Drox, Jynx, Mingovi, supar    |
|            3 |     2357 | 2024-10-04 | SemperFi       | L   | 0.249      | -            | -                | -                | -         |    -3.68 | alecc, Drox, Jynx, Mingovi, supar    |
|            2 |     2472 | 2024-10-02 | Arcade         | L   | 0.229      | -            | -                | -                | -         |    -2.70 | alecc, Drox, Jynx, Mingovi, supar    |
|            1 |     2473 | 2024-10-02 | Arcade         | L   | 0.229      | -            | -                | -                | -         |    -2.75 | alecc, Drox, Jynx, Mingovi, supar    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
