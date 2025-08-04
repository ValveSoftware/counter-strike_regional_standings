### Roster Details<br />
Team Name: Outfit 49<br />
Roster: 6SIX, bezymecc, H0NeST, KmZ, marekiew<br />
Global Rank: [255](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [83]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  495.5<br />
<br />
Final Rank Value (495.5) = Starting Rank Value (470.4) + Head To Head Adjustments (25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.148[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 470.4
- 400 + ( ( 0.037 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 470.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      388 | 2025-07-11 | M80          | L   | 1.000      | -            | -                | -                | -         |    -0.69 | 6SIX, bezymecc, H0NeST, KmZ, marekiew          |
|            5 |      396 | 2025-07-11 | Mythic       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.071 (0.010)    | 0 (0.000) |    16.78 | 6SIX, bezymecc, H0NeST, KmZ, marekiew          |
|            4 |     3148 | 2025-03-08 | Lycus Empire | L   | 0.208      | -            | -                | -                | -         |    -1.10 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |
|            3 |     3211 | 2025-03-07 | Worms        | W   | 0.203      | 0.143        | 0.001 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     4.31 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |
|            2 |     3233 | 2025-03-07 | Take Flyte   | W   | 0.201      | 0.143        | 0.000 (0.000)    | 0.017 (0.000)    | 0 (0.000) |     3.25 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |
|            1 |     3289 | 2025-03-06 | HbITuKu      | W   | 0.195      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.47 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
