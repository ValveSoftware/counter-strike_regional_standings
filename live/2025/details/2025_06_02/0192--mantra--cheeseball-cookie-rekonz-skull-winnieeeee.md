### Roster Details<br />
Team Name: MANTRA<br />
Roster: cheeseball, cookie, rekonz, SkulL, Winnieeeee<br />
Global Rank: [192](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [30]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  616.1<br />
<br />
Final Rank Value (616.1) = Starting Rank Value (639.9) + Head To Head Adjustments (-23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.9
- 400 + ( ( 0.131 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 639.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      614 | 2025-05-01 | Only One Word        | L   | 0.990      | -            | -                | -                | -         |   -12.59 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           26 |      839 | 2025-04-19 | Reverse Sweep        | L   | 0.909      | -            | -                | -                | -         |   -18.39 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           25 |      898 | 2025-04-17 | Only One Word        | L   | 0.895      | -            | -                | -                | -         |   -12.88 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           24 |     1068 | 2025-04-09 | Housebets            | L   | 0.843      | -            | -                | -                | -         |    -9.43 | cheeseball, rahley, rekonz, SkulL, vanillaicey |
|           23 |     1074 | 2025-04-09 | Housebets            | W   | 0.842      | 0.333        | 0.009 (0.003)    | 0.255 (0.071)    | 0 (0.000) |    17.53 | cheeseball, rahley, rekonz, SkulL, vanillaicey |
|           22 |     1304 | 2025-04-02 | Justice For Tomorrow | W   | 0.796      | 0.333        | 0.001 (0.000)    | 0.050 (0.013)    | 0 (0.000) |     9.84 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           21 |     1308 | 2025-04-02 | Justice For Tomorrow | W   | 0.796      | 0.333        | 0.001 (0.000)    | 0.050 (0.013)    | 0 (0.000) |    10.54 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           20 |     1457 | 2025-03-29 | ex-TALON             | L   | 0.769      | -            | -                | -                | -         |    -5.81 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           19 |     1465 | 2025-03-28 | Vantage              | W   | 0.768      | 0.143        | 0.000 (0.000)    | 0.094 (0.010)    | 0 (0.000) |     8.83 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           18 |     1526 | 2025-03-28 | KZG                  | W   | 0.762      | 0.143        | 0.001 (0.000)    | 0.124 (0.014)    | 0 (0.000) |    10.90 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           17 |     1596 | 2025-03-27 | Mindfreak            | L   | 0.756      | -            | -                | -                | -         |    -9.39 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           16 |     1598 | 2025-03-27 | Mindfreak            | L   | 0.756      | -            | -                | -                | -         |   -10.02 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           15 |     1601 | 2025-03-27 | Housebets            | L   | 0.755      | -            | -                | -                | -         |    -7.48 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           14 |     1648 | 2025-03-26 | Underground          | W   | 0.750      | 0.333        | 0.001 (0.000)    | 0.068 (0.017)    | 0 (0.000) |    10.31 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           13 |     1652 | 2025-03-26 | Underground          | W   | 0.749      | 0.333        | 0.001 (0.000)    | 0.068 (0.017)    | 0 (0.000) |    11.01 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           12 |     2556 | 2025-02-25 | KZG                  | L   | 0.560      | -            | -                | -                | -         |    -9.10 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           11 |     2589 | 2025-02-24 | Rooster              | W   | 0.553      | 0.143        | 0.010 (0.001)    | 0.317 (0.025)    | 0 (0.000) |    12.43 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           10 |     2613 | 2025-02-23 | ex-TALON             | L   | 0.548      | -            | -                | -                | -         |    -4.48 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            9 |     2819 | 2025-02-16 | Justice For Tomorrow | L   | 0.496      | -            | -                | -                | -         |    -8.23 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            8 |     2820 | 2025-02-15 | BBBMBCBS             | W   | 0.495      | -            | -                | -                | 0 (0.000) |     3.33 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            7 |     2859 | 2025-02-14 | Vantage              | L   | 0.487      | -            | -                | -                | -         |   -10.42 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            6 |     3288 | 2025-01-28 | Only One Word        | W   | 0.370      | 0.333        | 0.002 (0.000)    | 0.225 (0.028)    | 0 (0.000) |     7.90 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            5 |     3292 | 2025-01-28 | Only One Word        | W   | 0.369      | 0.333        | 0.002 (0.000)    | 0.225 (0.028)    | -         |     8.12 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            4 |     3408 | 2025-01-23 | Rooster              | L   | 0.336      | -            | -                | -                | -         |    -2.81 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            3 |     3409 | 2025-01-23 | Rooster              | L   | 0.336      | -            | -                | -                | -         |    -2.87 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            2 |     3440 | 2025-01-22 | KZG                  | L   | 0.330      | -            | -                | -                | -         |    -5.28 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            1 |     3443 | 2025-01-22 | KZG                  | L   | 0.329      | -            | -                | -                | -         |    -5.43 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $800.00        | $800.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
