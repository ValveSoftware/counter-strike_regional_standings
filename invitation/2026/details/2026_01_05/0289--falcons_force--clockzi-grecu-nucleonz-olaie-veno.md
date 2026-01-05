### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, NucleonZ, Olaie, VENO<br />
Global Rank: [289](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [164]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  455.9<br />
<br />
Final Rank Value (455.9) = Starting Rank Value (444.5) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.022<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 444.5
- 400 + ( ( 0.022 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 444.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1132 | 2025-11-07 | MOUZ NXT    | L   | 0.807      | -            | -                | -                | -         |    -0.38 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            4 |     1147 | 2025-11-07 | FUT Academy | L   | 0.806      | -            | -                | -                | -         |    -9.09 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            3 |     1164 | 2025-11-07 | EYEBALLERS  | L   | 0.806      | -            | -                | -                | -         |    -0.21 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            2 |     1178 | 2025-11-07 | MASONIC     | W   | 0.806      | 0.335        | 0.000 (0.000)    | 0.161 (0.044)    | 1 (0.806) |    21.22 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            1 |     1192 | 2025-11-07 | ENCE        | L   | 0.805      | -            | -                | -                | -         |    -0.15 | clockzi, grecu, NucleonZ, Olaie, VENO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
