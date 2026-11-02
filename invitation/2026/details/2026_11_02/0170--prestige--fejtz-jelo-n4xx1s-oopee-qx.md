### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Jelo, N4XX1S, oopee, qx<br />
Global Rank: [170](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [119]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  769.8<br />
<br />
Final Rank Value (769.8) = Starting Rank Value (722.0) + Head To Head Adjustments (47.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.324[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.0
- 400 + ( ( 0.172 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 722.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1155 | 2026-10-02 | Voca          | L   | 0.993      | -            | -                | -                | -         |    -3.15 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            8 |     1161 | 2026-10-02 | Glitch        | L   | 0.993      | -            | -                | -                | -         |   -20.92 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            7 |     1174 | 2026-10-02 | BASEMENT BOYS | L   | 0.993      | -            | -                | -                | -         |    -5.28 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            6 |     1188 | 2026-10-02 | BC.Game       | W   | 0.993      | 0.371        | 0.028 (0.010)    | 0.503 (0.185)    | 1 (0.993) |    30.13 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            5 |     1208 | 2026-10-02 | Sashi         | W   | 0.992      | 0.371        | 0.032 (0.012)    | 0.388 (0.142)    | 1 (0.992) |    27.55 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            4 |     3437 | 2026-08-09 | Betclic       | L   | 0.632      | -            | -                | -                | -         |    -1.14 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            3 |     3457 | 2026-08-08 | Metizport     | W   | 0.626      | 0.818        | 0.036 (0.018)    | 0.710 (0.364)    | 1 (0.626) |    18.79 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            2 |     3478 | 2026-08-08 | Dhala         | W   | 0.625      | 0.818        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.625) |     2.62 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            1 |     3491 | 2026-08-07 | Metizport     | L   | 0.620      | -            | -                | -                | -         |    -0.84 | fejtZ, Jelo, N4XX1S, oopee, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
