### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, nomizz, Weeza<br />
Global Rank: [235](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  466.2<br />
<br />
Final Rank Value (466.2) = Starting Rank Value (481.4) + Head To Head Adjustments (-15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 481.4


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
|            7 |     2601 | 2025-06-12 | Ghost          | L   | 0.430      | -            | -                | -                | -         |    -6.49 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            6 |     2646 | 2025-06-10 | Aether         | L   | 0.416      | -            | -                | -                | -         |    -6.41 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            5 |     2651 | 2025-06-10 | Getting Info   | L   | 0.415      | -            | -                | -                | -         |    -3.11 | BeaKie, cJ dA K1nG, dottie, nomizz, Weeza |
|            4 |     3583 | 2025-04-24 | Marsborne      | L   | 0.103      | -            | -                | -                | -         |    -0.21 | dottie, nomizz, rain, Weeza, Wolffe       |
|            3 |     3689 | 2025-04-17 | Wanted Goons   | W   | 0.056      | 0.333        | 0.000 (0.000)    | 0.220 (0.004)    | 0 (0.000) |     1.01 | dottie, mcniff, nomizz, rain, Weeza       |
|            2 |     3797 | 2025-04-13 | Fisher College | L   | 0.029      | -            | -                | -                | -         |    -0.33 | dottie, mcniff, nomizz, rain, Weeza       |
|            1 |     3848 | 2025-04-10 | Marsborne      | W   | 0.009      | 0.333        | 0.030 (0.000)    | 0.540 (0.002)    | 0 (0.000) |     0.27 | dottie, mcniff, nomizz, rain, Weeza       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
