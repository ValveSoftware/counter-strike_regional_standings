### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  1004.0<br />
<br />
Final Rank Value (1004.0) = Starting Rank Value (958.7) + Head To Head Adjustments (45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.275[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.7
- 400 + ( ( 0.265 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 958.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2605 | 2024-03-20 | Imperial        | L   | 0.446      | -            | -                | -                | -         |    -0.90 | acoR, isak, Keoz, Snax, volt |
|           21 |     2623 | 2024-03-19 | Eternal Fire    | L   | 0.439      | -            | -                | -                | -         |    -0.21 | acoR, isak, Keoz, Snax, volt |
|           20 |     2633 | 2024-03-18 | Legacy          | W   | 0.432      | 0.143        | 0.160 (0.010)    | 0.508 (0.031)    | 1 (0.432) |     8.84 | acoR, isak, Keoz, Snax, volt |
|           19 |     2642 | 2024-03-17 | SAW             | L   | 0.428      | -            | -                | -                | -         |    -2.10 | acoR, isak, Keoz, Snax, volt |
|           18 |     2658 | 2024-03-17 | AMKAL           | W   | 0.426      | 0.143        | 0.135 (0.008)    | 0.559 (0.034)    | 1 (0.426) |     9.21 | acoR, isak, Keoz, Snax, volt |
|           17 |     2874 | 2024-03-08 | BIG             | L   | 0.367      | -            | -                | -                | -         |    -1.09 | acoR, isak, Keoz, Snax, volt |
|           16 |     3181 | 2024-02-24 | 9 Pandas        | L   | 0.280      | -            | -                | -                | -         |    -2.85 | acoR, isak, Keoz, Snax, volt |
|           15 |     3190 | 2024-02-24 | ex-Guild Eagles | W   | 0.278      | 0.143        | 0.011 (0.000)    | 0.326 (0.013)    | 1 (0.278) |     3.45 | acoR, isak, Keoz, Snax, volt |
|           14 |     3196 | 2024-02-23 | fnatic          | W   | 0.273      | 0.143        | 0.298 (0.012)    | 0.623 (0.024)    | 1 (0.273) |     8.34 | acoR, isak, Keoz, Snax, volt |
|           13 |     3214 | 2024-02-22 | HEROIC          | L   | 0.267      | -            | -                | -                | -         |    -0.10 | acoR, isak, Keoz, Snax, volt |
|           12 |     3240 | 2024-02-21 | OG              | W   | 0.259      | 0.143        | 0.215 (0.008)    | 0.196 (0.007)    | 1 (0.259) |     5.89 | acoR, isak, Keoz, Snax, volt |
|           11 |     3271 | 2024-02-20 | ENCE            | L   | 0.252      | -            | -                | -                | -         |    -0.40 | acoR, isak, Keoz, Snax, volt |
|           10 |     3293 | 2024-02-19 | PERA            | W   | 0.246      | 0.143        | 0.066 (0.002)    | 0.433 (0.015)    | 1 (0.246) |     4.11 | acoR, isak, Keoz, Snax, volt |
|            9 |     3302 | 2024-02-19 | Vitality        | L   | 0.245      | -            | -                | -                | -         |    -0.03 | acoR, isak, Keoz, Snax, volt |
|            8 |     3544 | 2024-02-06 | HEROIC          | L   | 0.159      | -            | -                | -                | -         |    -0.06 | acoR, isak, Keoz, Snax, volt |
|            7 |     3550 | 2024-02-05 | MOUZ            | L   | 0.153      | -            | -                | -                | -         |    -0.02 | acoR, isak, Keoz, Snax, volt |
|            6 |     3576 | 2024-02-04 | Monte           | W   | 0.146      | 1.000        | 0.188 (0.027)    | 0.668 (0.097)    | 1 (0.146) |     3.92 | acoR, isak, Keoz, Snax, volt |
|            5 |     3662 | 2024-02-01 | Virtus.pro      | W   | 0.126      | 0.143        | 0.347 (0.006)    | 0.391 (0.007)    | 1 (0.126) |     3.92 | acoR, isak, Keoz, Snax, volt |
|            4 |     3676 | 2024-01-31 | M80             | W   | 0.120      | 0.143        | 0.218 (0.004)    | 0.649 (0.011)    | 1 (0.120) |     3.19 | acoR, isak, Keoz, Snax, volt |
|            3 |     3744 | 2024-01-26 | FaZe            | L   | 0.087      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            2 |     3772 | 2024-01-25 | Liquid          | L   | 0.078      | -            | -                | -                | -         |    -0.06 | acoR, isak, Keoz, Snax, volt |
|            1 |     3790 | 2024-01-24 | FaZe            | W   | 0.072      | 0.581        | 0.936 (0.039)    | 0.491 (0.021)    | 1 (0.072) |     2.25 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,323.83)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |
| 2024-02-11 |      0.194 | $16,000.00     | $3,096.73       |
| 2024-01-28 |      0.100 | $8,500.00      | $852.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
