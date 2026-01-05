### Roster Details<br />
Team Name: ex-Inner Circle<br />
Roster: hades, Snax, TaZ<br />
Global Rank: [282](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [162]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  487.0<br />
<br />
Final Rank Value (487.0) = Starting Rank Value (478.8) + Head To Head Adjustments (8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.158[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 478.8
- 400 + ( ( 0.040 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 478.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2270 | 2025-10-06 | Dziuseppe        | L   | 0.591      | -            | -                | -                | -         |    -2.85 | Goofy, hades, KEi, Snax, TaZ     |
|            4 |     2383 | 2025-10-03 | RUBY             | L   | 0.574      | -            | -                | -                | -         |    -0.75 | Goofy, hades, KEi, Snax, TaZ     |
|            3 |     2387 | 2025-10-03 | Friendly Campers | L   | 0.574      | -            | -                | -                | -         |    -0.10 | Goofy, hades, KEi, Snax, TaZ     |
|            2 |     2518 | 2025-09-30 | SENZA            | W   | 0.552      | 0.435        | 0.000 (0.000)    | 0.050 (0.012)    | 0 (0.000) |    12.31 | Goofy, hades, KEi, Snax, TaZ     |
|            1 |     2558 | 2025-09-29 | ECLOT            | L   | 0.544      | -            | -                | -                | -         |    -0.43 | Grashog, hades, Kylar, Snax, TaZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
