### Roster Details<br />
Team Name: ex-SABRE<br />
Roster: fakerealityy, hodix, jackast, neiter, tripex17<br />
Global Rank: [245](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  494.9<br />
<br />
Final Rank Value (494.9) = Starting Rank Value (492.1) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.1
- 400 + ( ( 0.049 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 492.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2807 | 2025-07-27 | SINNERS         | L   | 0.538      | -            | -                | -                | -         |    -0.34 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            9 |     3761 | 2025-05-24 | KHAN            | L   | 0.111      | -            | -                | -                | -         |    -0.53 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            8 |     3794 | 2025-05-22 | Fire Flux       | L   | 0.099      | -            | -                | -                | -         |    -0.60 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            7 |     3825 | 2025-05-21 | Passion UA      | L   | 0.092      | -            | -                | -                | -         |    -0.28 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            6 |     3879 | 2025-05-19 | Alliance        | W   | 0.078      | 0.384        | 0.023 (0.001)    | 0.795 (0.024)    | 0 (0.000) |     2.37 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            5 |     3892 | 2025-05-18 | Square Sausages | W   | 0.072      | 0.384        | 0.000 (0.000)    | 0.061 (0.002)    | 0 (0.000) |     1.52 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            4 |     3945 | 2025-05-15 | CPH Wolves      | L   | 0.054      | -            | -                | -                | -         |    -0.20 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            3 |     3976 | 2025-05-14 | Square Sausages | W   | 0.046      | 0.384        | 0.000 (0.000)    | 0.061 (0.001)    | 0 (0.000) |     0.97 | fakerealityy, hodix, jackast, neiter, tripex17 |
|            2 |     4120 | 2025-05-09 | HubaBuba        | L   | 0.012      | -            | -                | -                | -         |    -0.10 | fakerealityy, hodix, jackast, neiter, svemyy   |
|            1 |     4148 | 2025-05-08 | TPuDCATb TPu    | L   | 0.004      | -            | -                | -                | -         |    -0.01 | fakerealityy, hodix, jackast, neiter, svemyy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
