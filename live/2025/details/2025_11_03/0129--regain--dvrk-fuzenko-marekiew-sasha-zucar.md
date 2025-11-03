### Roster Details<br />
Team Name: regain<br />
Roster: dvrk, fuzenko, marekiew, sasha, Zucar<br />
Global Rank: [129](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  746.1<br />
<br />
Final Rank Value (746.1) = Starting Rank Value (688.5) + Head To Head Adjustments (57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.5
- 400 + ( ( 0.154 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 688.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      313 | 2025-10-15 | Wildcard        | L   | 1.000      | -            | -                | -                | -         |    -6.25 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           23 |      352 | 2025-10-14 | Kiri            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.67 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           22 |      471 | 2025-10-09 | Mythic          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.48 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           21 |      517 | 2025-10-08 | SkinRave        | L   | 1.000      | -            | -                | -                | -         |    -5.92 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           20 |      575 | 2025-10-07 | Voca            | L   | 1.000      | -            | -                | -                | -         |   -11.02 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           19 |      631 | 2025-10-06 | InControl       | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.186 (0.067)    | 0 (0.000) |    12.56 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           18 |      692 | 2025-10-05 | BOSS            | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.402 (0.134)    | 0 (0.000) |    17.21 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           17 |      828 | 2025-10-02 | FULL SEND       | W   | 0.989      | 0.333        | 0.000 (0.000)    | 0.279 (0.092)    | 0 (0.000) |    11.83 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           16 |      870 | 2025-10-01 | Money Crew      | W   | 0.982      | 0.333        | 0.002 (0.001)    | -                | 0 (0.000) |    12.65 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           15 |     1637 | 2025-09-10 | anything else   | L   | 0.843      | -            | -                | -                | -         |   -20.52 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           14 |     1687 | 2025-09-09 | Marsborne       | L   | 0.836      | -            | -                | -                | -         |    -6.04 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           13 |     2000 | 2025-08-28 | Wildcard        | L   | 0.755      | -            | -                | -                | -         |    -3.55 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           12 |     2048 | 2025-08-26 | Marsborne       | L   | 0.743      | -            | -                | -                | -         |    -5.48 | dvrk, fuzenko, sasha, spud, Zucar     |
|           11 |     2085 | 2025-08-24 | Zomblers        | W   | 0.729      | 0.333        | 0.002 (0.000)    | 0.320 (0.078)    | 0 (0.000) |     9.38 | dvrk, fuzenko, marekiew, sasha, Zucar |
|           10 |     2113 | 2025-08-22 | LAG             | L   | 0.716      | -            | -                | -                | -         |   -11.10 | dvrk, fuzenko, marekiew, sasha, Zucar |
|            9 |     2157 | 2025-08-20 | Shimmer         | W   | 0.701      | 0.333        | 0.009 (0.002)    | 0.366 (0.086)    | 0 (0.000) |     9.23 | dvrk, fuzenko, marekiew, sasha, Zucar |
|            8 |     2198 | 2025-08-18 | FlyQuest RED    | W   | 0.688      | 0.333        | 0.003 (0.001)    | 0.346 (0.079)    | 0 (0.000) |     8.40 | dvrk, fuzenko, sasha, spud, Zucar     |
|            7 |     2291 | 2025-08-15 | FULL SEND       | W   | 0.669      | 0.363        | -                | 0.279 (0.068)    | 0 (0.000) |     8.90 | dvrk, fuzenko, sasha, spud, Zucar     |
|            6 |     2298 | 2025-08-15 | SkinRave        | L   | 0.668      | -            | -                | -                | -         |    -4.20 | dvrk, fuzenko, marekiew, sasha, Zucar |
|            5 |     2337 | 2025-08-14 | Zomblers        | W   | 0.663      | 0.363        | 0.002 (0.000)    | 0.320 (0.077)    | -         |     9.12 | dvrk, fuzenko, marekiew, sasha, Zucar |
|            4 |     2385 | 2025-08-13 | FlyQuest RED    | W   | 0.656      | 0.363        | 0.003 (0.001)    | 0.346 (0.082)    | -         |     9.18 | dvrk, fuzenko, sasha, spud, Zucar     |
|            3 |     2446 | 2025-08-12 | SkinRave        | L   | 0.649      | -            | -                | -                | -         |    -3.95 | dvrk, fuzenko, sasha, spud, Zucar     |
|            2 |     2489 | 2025-08-11 | ex-Chicken Coop | W   | 0.643      | 0.363        | 0.003 (0.001)    | 0.315 (0.073)    | -         |    11.82 | dvrk, fuzenko, sasha, spud, Zucar     |
|            1 |     2815 | 2025-07-26 | M80             | L   | 0.535      | -            | -                | -                | -         |    -0.85 | dvrk, fuzenko, Halen, sasha, Zucar    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-10-08 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
