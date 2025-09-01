### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, raven, Serendipity, Stx<br />
Global Rank: [151](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [42]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  684.5<br />
<br />
Final Rank Value (684.5) = Starting Rank Value (839.1) + Head To Head Adjustments (-154.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.1
- 400 + ( ( 0.229 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 839.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      377 | 2025-08-13 | Chicken Coop     | L   | 1.000      | -            | -                | -                | -         |   -11.83 | empathy, Fawx, raven, Serendipity, Stx |
|           29 |      427 | 2025-08-12 | InControl        | L   | 1.000      | -            | -                | -                | -         |   -14.47 | empathy, Fawx, raven, Serendipity, Stx |
|           28 |      508 | 2025-08-10 | Legacy Kingdom   | L   | 1.000      | -            | -                | -                | -         |   -19.63 | empathy, Fawx, raven, Serendipity, Stx |
|           27 |      559 | 2025-08-08 | Chicken Coop     | L   | 1.000      | -            | -                | -                | -         |   -13.14 | empathy, Fawx, raven, Serendipity, Stx |
|           26 |      666 | 2025-08-01 | M80              | L   | 0.994      | -            | -                | -                | -         |    -2.44 | empathy, Fawx, raven, Serendipity, Stx |
|           25 |      720 | 2025-07-28 | Full House       | W   | 0.969      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.84 | empathy, Fawx, raven, Serendipity, Stx |
|           24 |      737 | 2025-07-27 | Arrival Seven    | L   | 0.963      | -            | -                | -                | -         |   -16.75 | empathy, Fawx, raven, Serendipity, Stx |
|           23 |      782 | 2025-07-26 | Getting Info     | L   | 0.955      | -            | -                | -                | -         |   -10.82 | empathy, Fawx, raven, Serendipity, Stx |
|           22 |      798 | 2025-07-25 | Aether           | L   | 0.949      | -            | -                | -                | -         |   -23.50 | empathy, Fawx, raven, Serendipity, Stx |
|           21 |     1072 | 2025-07-11 | Marca Registrada | L   | 0.856      | -            | -                | -                | -         |   -18.46 | empathy, Fawx, raven, Serendipity, Stx |
|           20 |     1710 | 2025-05-25 | FURIA fe         | L   | 0.541      | -            | -                | -                | -         |    -6.07 | empathy, Fawx, raven, Serendipity, Stx |
|           19 |     1725 | 2025-05-24 | NIP Impact       | W   | 0.534      | 0.624        | 0.034 (0.011)    | 0.070 (0.023)    | 1 (0.534) |     7.82 | empathy, Fawx, raven, Serendipity, Stx |
|           18 |     1732 | 2025-05-23 | Zerance          | W   | 0.529      | 0.624        | 0.022 (0.007)    | 0.054 (0.018)    | 1 (0.529) |     6.56 | empathy, Fawx, raven, Serendipity, Stx |
|           17 |     1752 | 2025-05-22 | FURIA fe         | L   | 0.522      | -            | -                | -                | -         |    -5.92 | empathy, Fawx, raven, Serendipity, Stx |
|           16 |     1756 | 2025-05-22 | Zerance          | W   | 0.521      | 0.624        | 0.022 (0.007)    | 0.054 (0.017)    | 1 (0.521) |     6.47 | empathy, Fawx, raven, Serendipity, Stx |
|           15 |     2024 | 2025-05-11 | MIGHT            | L   | 0.449      | -            | -                | -                | -         |   -10.62 | empathy, Fawx, raven, Serendipity, Stx |
|           14 |     2100 | 2025-05-08 | Legacy           | L   | 0.428      | -            | -                | -                | -         |    -0.95 | empathy, Fawx, raven, Serendipity, Stx |
|           13 |     2400 | 2025-04-27 | GameHunters      | L   | 0.351      | -            | -                | -                | -         |    -6.03 | empathy, Fawx, raven, Serendipity, Stx |
|           12 |     2534 | 2025-04-18 | BLUEJAYS         | L   | 0.296      | -            | -                | -                | -         |    -5.28 | empathy, Fawx, raven, Serendipity, Stx |
|           11 |     2662 | 2025-04-13 | Aether           | L   | 0.263      | -            | -                | -                | -         |    -6.08 | empathy, Fawx, raven, Serendipity, Stx |
|           10 |     2695 | 2025-04-11 | Black Mold       | W   | 0.249      | 0.525        | 0.001 (0.000)    | 0.052 (0.007)    | 0 (0.000) |     1.58 | empathy, Fawx, raven, Serendipity, Stx |
|            9 |     2718 | 2025-04-10 | Super Shy        | W   | 0.242      | -            | -                | -                | 0 (0.000) |     0.63 | empathy, Fawx, raven, Serendipity, Stx |
|            8 |     2786 | 2025-04-08 | Arrival Seven    | L   | 0.229      | -            | -                | -                | -         |    -4.71 | empathy, Fawx, raven, Serendipity, Stx |
|            7 |     2900 | 2025-04-03 | girl kissers     | W   | 0.196      | 0.525        | 0.001 (0.000)    | 0.107 (0.011)    | 0 (0.000) |     1.39 | empathy, Fawx, raven, Serendipity, Stx |
|            6 |     3172 | 2025-03-28 | LL               | L   | 0.156      | -            | -                | -                | -         |    -4.21 | empathy, Fawx, raven, Serendipity, Stx |
|            5 |     3223 | 2025-03-27 | Hooligangsters   | L   | 0.150      | -            | -                | -                | -         |    -4.07 | empathy, Fawx, raven, Serendipity, Stx |
|            4 |     3236 | 2025-03-27 | wwaves           | W   | 0.149      | 0.525        | 0.001 (0.000)    | 0.079 (0.006)    | 0 (0.000) |     1.01 | empathy, Fawx, raven, Serendipity, Stx |
|            3 |     3473 | 2025-03-20 | MEGA JUNERS      | W   | 0.103      | 0.525        | 0.001 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     0.64 | empathy, Fawx, raven, Serendipity, Stx |
|            2 |     3681 | 2025-03-12 | Ghost            | W   | 0.049      | 0.525        | 0.001 (0.000)    | 0.090 (0.002)    | 0 (0.000) |     0.32 | empathy, Fawx, raven, Serendipity, Stx |
|            1 |     3973 | 2025-03-06 | FlyQuest RED     | W   | 0.009      | 0.525        | 0.022 (0.000)    | 0.062 (0.000)    | -         |     0.10 | empathy, Fawx, raven, Serendipity, Stx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,325.99)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.541 | $45,000.00     | $24,325.99      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
