### Roster Details<br />
Team Name: F5<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [240](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [62]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  580.2<br />
<br />
Final Rank Value (580.2) = Starting Rank Value (545.9) + Head To Head Adjustments (34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.9
- 400 + ( ( 0.074 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 545.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       48 | 2026-01-03 | Venom      | L   | 1.000      | -            | -                | -                | -         |    -1.16 | bones, cmrn, Kermi, neight, Signal |
|            7 |       50 | 2026-01-03 | Memeories  | W   | 1.000      | 0.323        | 0.000 (0.000)    | 0.034 (0.011)    | 1 (1.000) |     9.99 | bones, cmrn, Kermi, neight, Signal |
|            6 |       54 | 2026-01-03 | Venom      | L   | 1.000      | -            | -                | -                | -         |    -1.06 | bones, cmrn, Kermi, neight, Signal |
|            5 |     1032 | 2025-11-09 | SAW        | L   | 0.820      | -            | -                | -                | -         |    -0.07 | bones, cmrn, Kermi, neight, Signal |
|            4 |     1048 | 2025-11-08 | Take Flyte | W   | 0.816      | 0.333        | 0.000 (0.000)    | 0.267 (0.073)    | 1 (0.816) |    13.77 | bones, cmrn, Kermi, neight, Signal |
|            3 |     1054 | 2025-11-08 | Marsborne  | L   | 0.815      | -            | -                | -                | -         |    -0.86 | bones, cmrn, Kermi, neight, Signal |
|            2 |     1060 | 2025-11-08 | Take Flyte | W   | 0.815      | 0.333        | 0.000 (0.000)    | 0.267 (0.073)    | 1 (0.815) |    14.50 | bones, cmrn, Kermi, neight, Signal |
|            1 |     3398 | 2025-09-06 | ODDIK      | L   | 0.394      | -            | -                | -                | -         |    -0.78 | bones, ditt, Kermi, neight, vin3   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
