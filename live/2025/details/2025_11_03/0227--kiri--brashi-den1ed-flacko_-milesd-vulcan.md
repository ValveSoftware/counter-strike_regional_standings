### Roster Details<br />
Team Name: Kiri<br />
Roster: Brashi, den1ed, flacko , milesd, VulcaN<br />
Global Rank: [227](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  540.5<br />
<br />
Final Rank Value (540.5) = Starting Rank Value (508.2) + Head To Head Adjustments (32.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.2
- 400 + ( ( 0.058 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 508.2


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
|            7 |      131 | 2025-10-25 | SkinRave        | L   | 1.000      | -            | -                | -                | -         |    -1.78 | flacko , Freaky, milesd, myline, VulcaN |
|            6 |      352 | 2025-10-14 | regain          | L   | 1.000      | -            | -                | -                | -         |    -7.67 | Brashi, den1ed, flacko , milesd, VulcaN |
|            5 |      474 | 2025-10-09 | FULL SEND       | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.279 (0.101)    | 0 (0.000) |    20.33 | Brashi, den1ed, flacko , milesd, VulcaN |
|            4 |      514 | 2025-10-08 | NuTorious       | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.081 (0.029)    | 0 (0.000) |    15.02 | Brashi, den1ed, flacko , milesd, VulcaN |
|            3 |      574 | 2025-10-07 | FlyQuest RED    | W   | 1.000      | 0.363        | 0.003 (0.001)    | 0.346 (0.125)    | 0 (0.000) |    21.04 | Brashi, den1ed, flacko , milesd, VulcaN |
|            2 |      691 | 2025-10-05 | FULL SEND       | L   | 1.000      | -            | -                | -                | -         |    -9.85 | Brashi, den1ed, flacko , milesd, VulcaN |
|            1 |     2084 | 2025-08-24 | ex-Chicken Coop | L   | 0.729      | -            | -                | -                | -         |    -4.75 | Brashi, den1ed, flacko , milesd, VulcaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
