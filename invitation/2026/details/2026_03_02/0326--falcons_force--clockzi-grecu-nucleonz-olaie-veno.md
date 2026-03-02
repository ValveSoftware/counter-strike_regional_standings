### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, NucleonZ, Olaie, VENO<br />
Global Rank: [326](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  431.3<br />
<br />
Final Rank Value (431.3) = Starting Rank Value (424.3) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.013<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 424.3
- 400 + ( ( 0.013 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 424.3


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
|            5 |     2912 | 2025-11-07 | MOUZ NXT    | L   | 0.433      | -            | -                | -                | -         |    -0.13 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            4 |     2927 | 2025-11-07 | FUT Academy | L   | 0.433      | -            | -                | -                | -         |    -4.99 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            3 |     2944 | 2025-11-07 | EYEBALLERS  | L   | 0.433      | -            | -                | -                | -         |    -0.16 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            2 |     2958 | 2025-11-07 | MASONIC     | W   | 0.432      | 0.335        | 0.000 (0.000)    | 0.517 (0.075)    | 1 (0.432) |    12.50 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            1 |     2972 | 2025-11-07 | ENCE        | L   | 0.432      | -            | -                | -                | -         |    -0.16 | clockzi, grecu, NucleonZ, Olaie, VENO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
