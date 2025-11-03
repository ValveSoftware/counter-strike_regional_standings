### Roster Details<br />
Team Name: Aether<br />
Roster: arcade, micro, misha, Sathsea, Tender<br />
Global Rank: [158](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  678.0<br />
<br />
Final Rank Value (678.0) = Starting Rank Value (662.1) + Head To Head Adjustments (15.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.1
- 400 + ( ( 0.140 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 662.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1324 | 2025-09-18 | Wildcard        | L   | 0.895      | -            | -                | -                | -         |    -3.49 | arcade, micro, misha, Sathsea, Tender    |
|           18 |     1357 | 2025-09-17 | BOSS            | W   | 0.889      | 0.363        | 0.006 (0.002)    | 0.402 (0.130)    | 0 (0.000) |    18.29 | arcade, micro, misha, Sathsea, Tender    |
|           17 |     1541 | 2025-09-12 | Outfit 49       | W   | 0.856      | 0.363        | 0.000 (0.000)    | 0.085 (0.026)    | 0 (0.000) |     9.33 | arcade, micro, misha, Sathsea, Tender    |
|           16 |     1583 | 2025-09-11 | Mythic          | W   | 0.849      | 0.363        | 0.000 (0.000)    | 0.147 (0.045)    | 0 (0.000) |     8.84 | arcade, micro, misha, Sathsea, Tender    |
|           15 |     1635 | 2025-09-10 | FULL SEND       | W   | 0.843      | 0.363        | 0.000 (0.000)    | 0.279 (0.085)    | 0 (0.000) |    12.80 | arcade, micro, misha, Sathsea, Tender    |
|           14 |     1740 | 2025-09-08 | Outfit 49       | L   | 0.829      | -            | -                | -                | -         |   -17.34 | arcade, micro, misha, Sathsea, Tender    |
|           13 |     2083 | 2025-08-24 | BOSS            | L   | 0.729      | -            | -                | -                | -         |    -8.10 | arcade, Jeebs, micro, obi, Tender        |
|           12 |     2115 | 2025-08-22 | Shimmer         | W   | 0.715      | 0.333        | 0.009 (0.002)    | 0.366 (0.087)    | 0 (0.000) |    11.60 | arcade, micro, N2o, obi, Tender          |
|           11 |     2178 | 2025-08-20 | MIGHT           | W   | 0.698      | 0.333        | 0.000 (0.000)    | 0.069 (0.016)    | 0 (0.000) |     6.20 | arcade, micro, N2o, obi, Tender          |
|           10 |     2186 | 2025-08-19 | Zomblers        | L   | 0.696      | -            | -                | -                | -         |   -10.67 | arcade, micro, N2o, obi, Tender          |
|            9 |     2219 | 2025-08-17 | ex-Chicken Coop | L   | 0.682      | -            | -                | -                | -         |    -8.08 | arcade, arias, clipzera, micro, Tender   |
|            8 |     2250 | 2025-08-16 | NRG             | L   | 0.676      | -            | -                | -                | -         |    -1.98 | arcade, arias, clipzera, Sathsea, Tender |
|            7 |     2388 | 2025-08-13 | MIGHT           | L   | 0.656      | -            | -                | -                | -         |   -15.28 | arcade, arias, clipzera, micro, Tender   |
|            6 |     2442 | 2025-08-12 | M80             | L   | 0.649      | -            | -                | -                | -         |    -0.86 | arcade, arias, clipzera, micro, Tender   |
|            5 |     2488 | 2025-08-11 | Wanted Goons    | W   | 0.643      | 0.363        | 0.000 (0.000)    | 0.172 (0.040)    | 0 (0.000) |     6.04 | arcade, arias, clipzera, micro, Tender   |
|            4 |     2723 | 2025-07-30 | NRG             | L   | 0.562      | -            | -                | -                | -         |    -1.89 | arias, clipzera, micro, misha, Tender    |
|            3 |     2748 | 2025-07-28 | Arrival Seven   | W   | 0.549      | 0.616        | 0.000 (0.000)    | 0.066 (0.022)    | 0 (0.000) |     7.49 | clipzera, flow, micro, misha, Tender     |
|            2 |     2810 | 2025-07-26 | ex-Chicken Coop | L   | 0.536      | -            | -                | -                | -         |    -6.79 | arias, clipzera, micro, misha, Tender    |
|            1 |     2830 | 2025-07-25 | Shimmer         | W   | 0.529      | 0.616        | 0.009 (0.003)    | 0.366 (0.119)    | 0 (0.000) |     9.79 | arias, clipzera, micro, misha, Tender    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($922.57)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-22 |      0.923 | $1,000.00      | $922.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
