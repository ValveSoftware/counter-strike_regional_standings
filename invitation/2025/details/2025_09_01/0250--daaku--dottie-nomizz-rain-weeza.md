### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, nomizz, rain, Weeza<br />
Global Rank: [250](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [129]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  494.6<br />
<br />
Final Rank Value (494.6) = Starting Rank Value (502.7) + Head To Head Adjustments (-8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.7
- 400 + ( ( 0.054 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 502.7


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
|            8 |     1470 | 2025-06-12 | Ghost          | L   | 0.663      | -            | -                | -                | -         |    -8.08 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            7 |     1515 | 2025-06-10 | Aether         | L   | 0.650      | -            | -                | -                | -         |    -9.56 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            6 |     1520 | 2025-06-10 | Getting Info   | L   | 0.648      | -            | -                | -                | -         |    -5.24 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            5 |     2452 | 2025-04-24 | Marsborne      | L   | 0.336      | -            | -                | -                | -         |    -1.30 | dottie, nomizz, rain, Weeza, Wolffe       |
|            4 |     2558 | 2025-04-17 | Wanted Goons   | W   | 0.289      | 0.333        | 0.000 (0.000)    | 0.152 (0.015)    | 0 (0.000) |     5.82 | dottie, mcniff, nomizz, rain, Weeza       |
|            3 |     2666 | 2025-04-13 | Fisher College | L   | 0.263      | -            | -                | -                | -         |    -2.31 | dottie, mcniff, nomizz, rain, Weeza       |
|            2 |     2717 | 2025-04-10 | Marsborne      | W   | 0.243      | 0.333        | 0.010 (0.001)    | 0.608 (0.049)    | 0 (0.000) |     6.77 | dottie, mcniff, nomizz, rain, Weeza       |
|            1 |     2826 | 2025-04-07 | BLUEJAYS       | W   | 0.223      | 0.333        | 0.008 (0.001)    | 0.200 (0.015)    | 0 (0.000) |     5.74 | dottie, mcniff, nomizz, rain, Weeza       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
