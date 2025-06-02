### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, Silence, Skrimo, swicher, titulus<br />
Global Rank: [265](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  425.0<br />
<br />
Final Rank Value (425.0) = Starting Rank Value (400.3) + Head To Head Adjustments (24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 400.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      378 | 2025-05-10 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -1.27 | dezt, Silence, Skrimo, swicher, titulus |
|            5 |      685 | 2025-04-27 | Northern Lights | W   | 0.965      | 0.143        | 0.000 (0.000)    | 0.040 (0.005)    | 0 (0.000) |    14.67 | dezt, Silence, Skrimo, swicher, titulus |
|            4 |      693 | 2025-04-27 | Lilmix          | W   | 0.964      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.09 | dezt, Silence, Skrimo, swicher, titulus |
|            3 |      729 | 2025-04-26 | Metizport       | L   | 0.957      | -            | -                | -                | -         |    -0.98 | dezt, Silence, Skrimo, swicher, titulus |
|            2 |     3615 | 2024-12-19 | Astralis Talent | L   | 0.104      | -            | -                | -                | -         |    -1.21 | dezt, shyyne, Skrimo, swicher, zodi     |
|            1 |     3627 | 2024-12-18 | WOPA            | L   | 0.097      | -            | -                | -                | -         |    -0.55 | dezt, shyyne, Skrimo, swicher, zodi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
