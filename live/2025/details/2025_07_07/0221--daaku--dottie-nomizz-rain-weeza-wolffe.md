### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, nomizz, rain, Weeza, Wolffe<br />
Global Rank: [221](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [71]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  533.4<br />
<br />
Final Rank Value (533.4) = Starting Rank Value (525.8) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.8
- 400 + ( ( 0.067 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 525.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      253 | 2025-06-12 | Ghost          | L   | 1.000      | -            | -                | -                | -         |   -13.49 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            7 |      298 | 2025-06-10 | Aether         | L   | 1.000      | -            | -                | -                | -         |   -11.33 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            6 |      303 | 2025-06-10 | Getting Info   | L   | 1.000      | -            | -                | -                | -         |    -3.76 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            5 |     1235 | 2025-04-24 | Marsborne      | L   | 0.709      | -            | -                | -                | -         |    -4.35 | dottie, nomizz, rain, Weeza, Wolffe       |
|            4 |     1341 | 2025-04-17 | Wanted Goons   | W   | 0.662      | 0.333        | 0.001 (0.000)    | 0.202 (0.045)    | 0 (0.000) |    13.07 | dottie, mcniff, nomizz, rain, Weeza       |
|            3 |     1449 | 2025-04-13 | Fisher College | L   | 0.635      | -            | -                | -                | -         |    -5.45 | dottie, mcniff, nomizz, rain, Weeza       |
|            2 |     1500 | 2025-04-10 | Marsborne      | W   | 0.615      | 0.333        | 0.013 (0.003)    | 0.486 (0.100)    | 0 (0.000) |    15.89 | dottie, mcniff, nomizz, rain, Weeza       |
|            1 |     1609 | 2025-04-07 | BOSS           | W   | 0.596      | 0.333        | 0.023 (0.005)    | 0.659 (0.131)    | 0 (0.000) |    17.10 | dottie, mcniff, nomizz, rain, Weeza       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
