### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, raven, Serendipity, Stx<br />
Global Rank: [157](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  687.7<br />
<br />
Final Rank Value (687.7) = Starting Rank Value (830.1) + Head To Head Adjustments (-142.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.193[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 830.1
- 400 + ( ( 0.220 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 830.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      660 | 2025-09-12 | BOSS           | L   | 1.000      | -            | -                | -                | -         |   -10.40 | empathy, Fawx, Ink, raven, Stx         |
|           30 |      702 | 2025-09-11 | SkinRave       | L   | 1.000      | -            | -                | -                | -         |    -2.93 | empathy, Fawx, Ink, raven, Stx         |
|           29 |      788 | 2025-09-09 | FlyQuest RED   | W   | 1.000      | 0.363        | 0.014 (0.005)    | 0.096 (0.035)    | 0 (0.000) |    13.33 | empathy, Fawx, raven, Serendipity, Stx |
|           28 |      913 | 2025-09-06 | SkinRave       | L   | 1.000      | -            | -                | -                | -         |    -2.71 | empathy, Fawx, raven, Serendipity, Stx |
|           27 |      923 | 2025-09-06 | Reign Above    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.18 | empathy, Fawx, raven, Serendipity, Stx |
|           26 |     1216 | 2025-08-22 | Aether         | L   | 0.903      | -            | -                | -                | -         |   -14.71 | empathy, Fawx, raven, Serendipity, Stx |
|           25 |     1258 | 2025-08-20 | ASPYRE         | L   | 0.889      | -            | -                | -                | -         |   -17.10 | empathy, Fawx, raven, Serendipity, Stx |
|           24 |     1286 | 2025-08-19 | SkinRave       | L   | 0.883      | -            | -                | -                | -         |    -3.72 | empathy, Fawx, raven, Serendipity, Stx |
|           23 |     1389 | 2025-08-15 | FlyQuest RED   | W   | 0.856      | 0.333        | 0.014 (0.004)    | 0.096 (0.027)    | 0 (0.000) |    11.41 | empathy, Fawx, raven, Serendipity, Stx |
|           22 |     1484 | 2025-08-13 | Chicken Coop   | L   | 0.843      | -            | -                | -                | -         |   -11.80 | empathy, Fawx, raven, Serendipity, Stx |
|           21 |     1543 | 2025-08-12 | InControl      | L   | 0.836      | -            | -                | -                | -         |   -13.36 | empathy, Fawx, raven, Serendipity, Stx |
|           20 |     1639 | 2025-08-10 | Legacy Kingdom | L   | 0.823      | -            | -                | -                | -         |   -19.90 | empathy, Fawx, raven, Serendipity, Stx |
|           19 |     1690 | 2025-08-08 | Chicken Coop   | L   | 0.809      | -            | -                | -                | -         |   -12.64 | empathy, Fawx, raven, Serendipity, Stx |
|           18 |     1797 | 2025-08-01 | M80            | L   | 0.761      | -            | -                | -                | -         |    -1.65 | empathy, Fawx, raven, Serendipity, Stx |
|           17 |     1851 | 2025-07-28 | Full House     | W   | 0.735      | 0.419        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.62 | empathy, Fawx, raven, Serendipity, Stx |
|           16 |     1868 | 2025-07-27 | Arrival Seven  | L   | 0.730      | -            | -                | -                | -         |   -15.11 | empathy, Fawx, raven, Serendipity, Stx |
|           15 |     1913 | 2025-07-26 | Getting Info   | L   | 0.722      | -            | -                | -                | -         |    -8.71 | empathy, Fawx, raven, Serendipity, Stx |
|           14 |     1929 | 2025-07-25 | Aether         | L   | 0.716      | -            | -                | -                | -         |   -14.21 | empathy, Fawx, raven, Serendipity, Stx |
|           13 |     2203 | 2025-07-11 | FULL SEND      | L   | 0.622      | -            | -                | -                | -         |   -16.08 | empathy, Fawx, raven, Serendipity, Stx |
|           12 |     2841 | 2025-05-25 | FURIA fe       | L   | 0.307      | -            | -                | -                | -         |    -4.82 | empathy, Fawx, raven, Serendipity, Stx |
|           11 |     2856 | 2025-05-24 | NIP Impact     | W   | 0.301      | 0.624        | 0.021 (0.004)    | 0.065 (0.012)    | 1 (0.301) |     3.78 | empathy, Fawx, raven, Serendipity, Stx |
|           10 |     2863 | 2025-05-23 | Zerance        | W   | 0.296      | 0.624        | 0.014 (0.003)    | 0.013 (0.002)    | 1 (0.296) |     3.01 | empathy, Fawx, raven, Serendipity, Stx |
|            9 |     2883 | 2025-05-22 | FURIA fe       | L   | 0.288      | -            | -                | -                | -         |    -4.60 | empathy, Fawx, raven, Serendipity, Stx |
|            8 |     2887 | 2025-05-22 | Zerance        | W   | 0.287      | 0.624        | 0.014 (0.002)    | 0.013 (0.002)    | 1 (0.287) |     2.90 | empathy, Fawx, raven, Serendipity, Stx |
|            7 |     3155 | 2025-05-11 | MIGHT          | L   | 0.215      | -            | -                | -                | -         |    -5.78 | empathy, Fawx, raven, Serendipity, Stx |
|            6 |     3231 | 2025-05-08 | Legacy         | L   | 0.195      | -            | -                | -                | -         |    -0.36 | empathy, Fawx, raven, Serendipity, Stx |
|            5 |     3531 | 2025-04-27 | GameHunters    | L   | 0.118      | -            | -                | -                | -         |    -1.91 | empathy, Fawx, raven, Serendipity, Stx |
|            4 |     3665 | 2025-04-18 | BLUEJAYS       | L   | 0.063      | -            | -                | -                | -         |    -1.38 | empathy, Fawx, raven, Serendipity, Stx |
|            3 |     3793 | 2025-04-13 | Aether         | L   | 0.030      | -            | -                | -                | -         |    -0.82 | empathy, Fawx, raven, Serendipity, Stx |
|            2 |     3826 | 2025-04-11 | Black Mold     | W   | 0.016      | 0.525        | 0.000 (0.000)    | 0.037 (0.000)    | 0 (0.000) |     0.07 | empathy, Fawx, raven, Serendipity, Stx |
|            1 |     3849 | 2025-04-10 | Super Shy      | W   | 0.009      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.02 | empathy, Fawx, raven, Serendipity, Stx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,828.88)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.307 | $45,000.00     | $13,828.88      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
