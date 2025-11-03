### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, raven, Serendipity, Stx<br />
Global Rank: [170](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  652.7<br />
<br />
Final Rank Value (652.7) = Starting Rank Value (739.4) + Head To Head Adjustments (-86.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.4
- 400 + ( ( 0.181 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 739.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      150 | 2025-10-24 | FlyQuest RED    | L   | 1.000      | -            | -                | -                | -         |   -15.96 | empathy, Fawx, raven, Serendipity, Stx |
|           37 |      280 | 2025-10-16 | wwaves          | W   | 1.000      | 0.323        | 0.002 (0.001)    | 0.075 (0.024)    | 0 (0.000) |    12.89 | empathy, Fawx, raven, Serendipity, Stx |
|           36 |      473 | 2025-10-09 | Nocturnal       | W   | 1.000      | 0.323        | 0.002 (0.001)    | 0.191 (0.062)    | 0 (0.000) |    15.44 | empathy, Fawx, raven, Serendipity, Stx |
|           35 |      519 | 2025-10-08 | Mythic          | L   | 1.000      | -            | -                | -                | -         |   -19.81 | empathy, Fawx, raven, Serendipity, Stx |
|           34 |      628 | 2025-10-06 | ex-Chicken Coop | L   | 1.000      | -            | -                | -                | -         |   -13.49 | empathy, Fawx, raven, Serendipity, Stx |
|           33 |      749 | 2025-10-04 | FULL SEND       | L   | 1.000      | -            | -                | -                | -         |   -17.94 | empathy, Fawx, raven, Serendipity, Stx |
|           32 |      793 | 2025-10-03 | Money Crew      | W   | 0.996      | 0.333        | 0.002 (0.001)    | 0.070 (0.023)    | 0 (0.000) |    13.14 | empathy, Fawx, raven, Serendipity, Stx |
|           31 |      867 | 2025-10-01 | FULL SEND       | L   | 0.983      | -            | -                | -                | -         |   -18.11 | empathy, Fawx, raven, Serendipity, Stx |
|           30 |      869 | 2025-10-01 | Little Bocks    | W   | 0.982      | 0.323        | 0.002 (0.001)    | 0.029 (0.009)    | 0 (0.000) |     7.18 | empathy, Fawx, raven, Serendipity, Stx |
|           29 |     1171 | 2025-09-24 | Lotus fe        | W   | 0.935      | 0.323        | 0.002 (0.001)    | 0.145 (0.044)    | 0 (0.000) |    12.68 | empathy, Fawx, raven, Serendipity, Stx |
|           28 |     1322 | 2025-09-18 | Ghost           | W   | 0.896      | 0.323        | 0.003 (0.001)    | 0.168 (0.049)    | 0 (0.000) |    10.48 | empathy, Fawx, raven, Serendipity, Stx |
|           27 |     1544 | 2025-09-12 | BOSS            | L   | 0.856      | -            | -                | -                | -         |    -9.50 | empathy, Fawx, Ink, raven, Stx         |
|           26 |     1587 | 2025-09-11 | SkinRave        | L   | 0.849      | -            | -                | -                | -         |    -3.42 | empathy, Fawx, Ink, raven, Stx         |
|           25 |     1642 | 2025-09-10 | Black Mold      | W   | 0.842      | 0.323        | 0.002 (0.001)    | 0.081 (0.022)    | -         |    11.59 | empathy, Fawx, raven, Serendipity, Stx |
|           24 |     1685 | 2025-09-09 | FlyQuest RED    | W   | 0.836      | 0.363        | 0.003 (0.001)    | 0.346 (0.105)    | -         |    12.33 | empathy, Fawx, raven, Serendipity, Stx |
|           23 |     1812 | 2025-09-06 | SkinRave        | L   | 0.815      | -            | -                | -                | -         |    -2.93 | empathy, Fawx, raven, Serendipity, Stx |
|           22 |     1822 | 2025-09-06 | Reign Above     | W   | 0.814      | -            | -                | -                | 1 (0.814) |     4.91 | empathy, Fawx, raven, Serendipity, Stx |
|           21 |     2115 | 2025-08-22 | Aether          | L   | 0.715      | -            | -                | -                | -         |   -11.60 | empathy, Fawx, raven, Serendipity, Stx |
|           20 |     2157 | 2025-08-20 | regain          | L   | 0.701      | -            | -                | -                | -         |    -9.23 | empathy, Fawx, raven, Serendipity, Stx |
|           19 |     2185 | 2025-08-19 | SkinRave        | L   | 0.696      | -            | -                | -                | -         |    -3.54 | empathy, Fawx, raven, Serendipity, Stx |
|           18 |     2288 | 2025-08-15 | FlyQuest RED    | W   | 0.669      | 0.333        | 0.003 (0.001)    | 0.346 (0.077)    | -         |     9.90 | empathy, Fawx, raven, Serendipity, Stx |
|           17 |     2383 | 2025-08-13 | ex-Chicken Coop | L   | 0.656      | -            | -                | -                | -         |    -8.33 | empathy, Fawx, raven, Serendipity, Stx |
|           16 |     2443 | 2025-08-12 | InControl       | L   | 0.649      | -            | -                | -                | -         |    -9.90 | empathy, Fawx, raven, Serendipity, Stx |
|           15 |     2540 | 2025-08-10 | Zomblers        | L   | 0.636      | -            | -                | -                | -         |   -11.01 | empathy, Fawx, raven, Serendipity, Stx |
|           14 |     2591 | 2025-08-08 | ex-Chicken Coop | L   | 0.622      | -            | -                | -                | -         |    -8.60 | empathy, Fawx, raven, Serendipity, Stx |
|           13 |     2698 | 2025-08-01 | M80             | L   | 0.574      | -            | -                | -                | -         |    -0.96 | empathy, Fawx, raven, Serendipity, Stx |
|           12 |     2752 | 2025-07-28 | Full House      | W   | 0.548      | -            | -                | -                | -         |     2.65 | empathy, Fawx, raven, Serendipity, Stx |
|           11 |     2769 | 2025-07-27 | Arrival Seven   | L   | 0.542      | -            | -                | -                | -         |   -10.84 | empathy, Fawx, raven, Serendipity, Stx |
|           10 |     2814 | 2025-07-26 | Voca            | L   | 0.535      | -            | -                | -                | -         |    -6.11 | empathy, Fawx, raven, Serendipity, Stx |
|            9 |     2830 | 2025-07-25 | Aether          | L   | 0.529      | -            | -                | -                | -         |    -9.79 | empathy, Fawx, raven, Serendipity, Stx |
|            8 |     3104 | 2025-07-11 | FULL SEND       | L   | 0.435      | -            | -                | -                | -         |    -8.29 | empathy, Fawx, raven, Serendipity, Stx |
|            7 |     3742 | 2025-05-25 | FURIA fe        | L   | 0.120      | -            | -                | -                | -         |    -2.01 | empathy, Fawx, raven, Serendipity, Stx |
|            6 |     3757 | 2025-05-24 | NIP Impact      | W   | 0.113      | 0.624        | 0.005 (0.000)    | 0.233 (0.016)    | 1 (0.113) |     1.50 | empathy, Fawx, raven, Serendipity, Stx |
|            5 |     3764 | 2025-05-23 | Nemesis Impact  | W   | 0.109      | -            | -                | -                | 1 (0.109) |     1.25 | empathy, Fawx, raven, Serendipity, Stx |
|            4 |     3784 | 2025-05-22 | FURIA fe        | L   | 0.101      | -            | -                | -                | -         |    -1.71 | empathy, Fawx, raven, Serendipity, Stx |
|            3 |     3788 | 2025-05-22 | Nemesis Impact  | W   | 0.100      | -            | -                | -                | 1 (0.100) |     1.15 | empathy, Fawx, raven, Serendipity, Stx |
|            2 |     4056 | 2025-05-11 | MIGHT           | L   | 0.028      | -            | -                | -                | -         |    -0.71 | empathy, Fawx, raven, Serendipity, Stx |
|            1 |     4132 | 2025-05-08 | Legacy          | L   | 0.008      | -            | -                | -                | -         |     0.00 | empathy, Fawx, raven, Serendipity, Stx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,407.66)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.120 | $45,000.00     | $5,407.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
