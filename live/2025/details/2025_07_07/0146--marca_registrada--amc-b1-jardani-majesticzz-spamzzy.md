### Roster Details<br />
Team Name: Marca Registrada<br />
Roster: AMC, b1, Jardani, Majesticzz, spamzzy<br />
Global Rank: [146](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [43]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  660.9<br />
<br />
Final Rank Value (660.9) = Starting Rank Value (653.7) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.7
- 400 + ( ( 0.136 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 653.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       38 | 2025-06-24 | Akimbo        | L   | 1.000      | -            | -                | -                | -         |   -14.56 | AMC, b1, Jardani, Majesticzz, spamzzy |
|           14 |      139 | 2025-06-16 | MIGHT         | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.311 (0.104)    | 0 (0.000) |    14.90 | AMC, b1, Jardani, Majesticzz, spamzzy |
|           13 |      183 | 2025-06-14 | Subtick       | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.044 (0.015)    | 0 (0.000) |     9.74 | AMC, b1, Jardani, Majesticzz, spamzzy |
|           12 |      256 | 2025-06-12 | Getting Info  | L   | 1.000      | -            | -                | -                | -         |    -5.74 | AMC, b1, Jardani, Majesticzz, spamzzy |
|           11 |      313 | 2025-06-09 | Aether        | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.346 (0.115)    | 0 (0.000) |    16.17 | AMC, b1, Jardani, Majesticzz, spamzzy |
|           10 |     1884 | 2025-03-29 | Tsunami       | L   | 0.535      | -            | -                | -                | -         |    -8.28 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            9 |     1962 | 2025-03-28 | Akimbo        | W   | 0.528      | 0.143        | 0.007 (0.001)    | 0.255 (0.019)    | 0 (0.000) |     9.41 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            8 |     2013 | 2025-03-27 | Wanted Goons  | L   | 0.522      | -            | -                | -                | -         |    -8.26 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            7 |     2237 | 2025-03-21 | anything else | L   | 0.483      | -            | -                | -                | -         |    -7.42 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            6 |     2331 | 2025-03-18 | JERSA         | L   | 0.463      | -            | -                | -                | -         |    -6.73 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            5 |     2506 | 2025-03-10 | anything else | W   | 0.409      | 0.372        | 0.004 (0.001)    | 0.099 (0.015)    | 0 (0.000) |     6.33 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            4 |     2687 | 2025-03-07 | BLUEJAYS      | L   | 0.389      | -            | -                | -                | -         |    -3.46 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            3 |     2696 | 2025-03-07 | Rolling Stone | W   | 0.388      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.34 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            2 |     2759 | 2025-03-06 | LAG           | L   | 0.382      | -            | -                | -                | -         |    -5.81 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            1 |     2795 | 2025-03-05 | BLUEJAYS      | W   | 0.376      | 0.143        | 0.031 (0.002)    | 0.600 (0.032)    | 0 (0.000) |     8.58 | AMC, b1, Jardani, Majesticzz, spamzzy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,638.35)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.496 | $3,300.00      | $1,638.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
