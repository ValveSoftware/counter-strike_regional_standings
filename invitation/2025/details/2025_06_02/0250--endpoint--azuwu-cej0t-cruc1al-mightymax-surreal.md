### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [250](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  491.2<br />
<br />
Final Rank Value (491.2) = Starting Rank Value (489.6) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.6
- 400 + ( ( 0.049 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 489.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3732 | 2024-12-12 | ENCE         | L   | 0.057      | -            | -                | -                | -         |    -0.05 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     3741 | 2024-12-11 | Fire Flux    | L   | 0.052      | -            | -                | -                | -         |    -0.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     3745 | 2024-12-11 | Iberian Soul | W   | 0.052      | 0.435        | 0.019 (0.000)    | 0.624 (0.014)    | 0 (0.000) |     1.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     3754 | 2024-12-10 | JiJieHao     | L   | 0.045      | -            | -                | -                | -         |    -0.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     3765 | 2024-12-09 | CYBERSHOKE   | W   | 0.038      | 0.435        | 0.012 (0.000)    | 1.000 (0.017)    | 0 (0.000) |     1.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     3785 | 2024-12-08 | Insilio      | L   | 0.030      | -            | -                | -                | -         |    -0.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     3839 | 2024-12-06 | WildLotus    | L   | 0.018      | -            | -                | -                | -         |    -0.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     3845 | 2024-12-06 | Illuminar    | L   | 0.016      | -            | -                | -                | -         |    -0.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     3894 | 2024-12-04 | Fire Flux    | W   | 0.005      | 0.435        | 0.005 (0.000)    | 0.758 (0.002)    | 0 (0.000) |     0.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
