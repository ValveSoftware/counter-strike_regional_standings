### Roster Details<br />
Team Name: Illuminar<br />
Roster: AxEcHo, discoStar, Furlan, Pelle, SpavaQu<br />
Global Rank: [219](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [115]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  539.9<br />
<br />
Final Rank Value (539.9) = Starting Rank Value (526.7) + Head To Head Adjustments (13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.7
- 400 + ( ( 0.068 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 526.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      568 | 2025-05-21 | Fire Flux  | L   | 0.886      | -            | -                | -                | -         |    -4.83 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            4 |      655 | 2025-05-17 | CYBERSHOKE | L   | 0.860      | -            | -                | -                | -         |    -2.45 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            3 |      759 | 2025-05-13 | Astrum     | L   | 0.834      | -            | -                | -                | -         |    -1.90 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            2 |      809 | 2025-05-11 | SINNERS    | W   | 0.821      | 0.435        | 0.030 (0.011)    | 0.553 (0.197)    | 0 (0.000) |    22.79 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            1 |     2223 | 2025-03-22 | TNL        | L   | 0.486      | -            | -                | -                | -         |    -0.41 | AxEcHo, Furlan, next1me, Pelle, SpavaQu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
