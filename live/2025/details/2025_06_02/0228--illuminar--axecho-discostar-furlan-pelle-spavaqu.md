### Roster Details<br />
Team Name: Illuminar<br />
Roster: AxEcHo, discoStar, Furlan, Pelle, SpavaQu<br />
Global Rank: [228](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [120]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  547.5<br />
<br />
Final Rank Value (547.5) = Starting Rank Value (533.8) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 533.8
- 400 + ( ( 0.073 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 533.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      129 | 2025-05-21 | Fire Flux  | L   | 1.000      | -            | -                | -                | -         |    -5.69 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu     |
|            6 |      203 | 2025-05-17 | CYBERSHOKE | L   | 1.000      | -            | -                | -                | -         |    -3.67 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu     |
|            5 |      303 | 2025-05-13 | Astrum     | L   | 1.000      | -            | -                | -                | -         |    -2.23 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu     |
|            4 |      349 | 2025-05-11 | SINNERS    | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.576 (0.250)    | 0 (0.000) |    27.74 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu     |
|            3 |     1747 | 2025-03-22 | TNL        | L   | 0.724      | -            | -                | -                | -         |    -1.32 | AxEcHo, Furlan, next1me, Pelle, SpavaQu       |
|            2 |     3617 | 2024-12-19 | UNiTY      | L   | 0.104      | -            | -                | -                | -         |    -0.89 | AntyVirus, discoStar, Furlan, kadziu, SpavaQu |
|            1 |     3628 | 2024-12-18 | Nexus      | L   | 0.097      | -            | -                | -                | -         |    -0.18 | AntyVirus, discoStar, Furlan, kadziu, SpavaQu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
