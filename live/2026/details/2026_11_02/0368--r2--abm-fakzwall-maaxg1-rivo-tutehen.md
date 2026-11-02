### Roster Details<br />
Team Name: R2<br />
Roster: ABM, fakzwall, maaxg1, Rivo, tutehen<br />
Global Rank: [368](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [83]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  400.7<br />
<br />
Final Rank Value (400.7) = Starting Rank Value (400.1) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 400.1


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
|            6 |     5520 | 2026-05-20 | MIBR Academy   | L   | 0.094      | -            | -                | -                | -         |    -0.67 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|            5 |     5550 | 2026-05-19 | JOGA DE TERNO  | L   | 0.087      | -            | -                | -                | -         |    -0.49 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|            4 |     5598 | 2026-05-17 | Mansão Maromba | W   | 0.073      | 0.354        | 0.000 (0.000)    | 0.082 (0.002)    | 0 (0.000) |     1.15 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|            3 |     5651 | 2026-05-15 | Procyon        | L   | 0.060      | -            | -                | -                | -         |    -0.11 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|            2 |     5732 | 2026-05-12 | EXODIA         | W   | 0.042      | 0.354        | 0.000 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     0.66 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|            1 |     5908 | 2026-05-06 | Isurus         | L   | 0.001      | -            | -                | -                | -         |    -0.00 | ABM, fakzwall, maaxg1, Rivo, tutehen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
