### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [166](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  626.7<br />
<br />
Final Rank Value (626.7) = Starting Rank Value (627.0) + Head To Head Adjustments (-0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.0
- 400 + ( ( 0.125 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 627.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2641 | 2024-12-12 | ENCE            | L   | 0.239      | -            | -                | -                | -         |    -0.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     2650 | 2024-12-11 | Fire Flux       | L   | 0.235      | -            | -                | -                | -         |    -2.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     2654 | 2024-12-11 | Iberian Soul    | W   | 0.234      | 0.435        | 0.010 (0.001)    | 0.716 (0.073)    | 0 (0.000) |     5.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     2663 | 2024-12-10 | JiJieHao        | L   | 0.228      | -            | -                | -                | -         |    -0.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     2674 | 2024-12-09 | CYBERSHOKE      | W   | 0.221      | 0.435        | 0.005 (0.000)    | 0.884 (0.085)    | 0 (0.000) |     4.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     2694 | 2024-12-08 | Insilio         | L   | 0.213      | -            | -                | -                | -         |    -4.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     2748 | 2024-12-06 | Into the Breach | L   | 0.201      | -            | -                | -                | -         |    -4.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     2754 | 2024-12-06 | Illuminar       | L   | 0.199      | -            | -                | -                | -         |    -3.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     2803 | 2024-12-04 | Fire Flux       | W   | 0.187      | 0.435        | 0.002 (0.000)    | 0.751 (0.061)    | 0 (0.000) |     4.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     2847 | 2024-12-02 | TSM             | L   | 0.172      | -            | -                | -                | -         |    -3.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     2986 | 2024-11-24 | Fire Flux       | W   | 0.121      | 0.333        | 0.002 (0.000)    | 0.751 (0.030)    | 0 (0.000) |     2.62 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     3013 | 2024-11-23 | PCIFIC          | W   | 0.114      | 0.333        | 0.000 (0.000)    | 0.089 (0.003)    | 0 (0.000) |     1.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     3405 | 2024-11-07 | Sashi           | L   | 0.007      | -            | -                | -                | -         |    -0.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($603.95)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.121 | $5,000.00      | $603.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
