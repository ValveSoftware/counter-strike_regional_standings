### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [16](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [12]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1573.2<br />
<br />
Final Rank Value (1573.2) = Starting Rank Value (1585.7) + Head To Head Adjustments (-12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.604[<sup>1</sup>](#table2)
- Bounty Collected: 0.666[<sup>2</sup>](#table1)
- Opponent Network: 0.323[<sup>2</sup>](#table1)
- LAN Wins: 0.898[<sup>2</sup>](#table1)

The average of these factors is 0.623<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1585.7
- 400 + ( ( 0.623 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1585.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       68 | 2025-11-26 | Legacy            | W   | 1.000      | 0.143        | 1.000 (0.143)    | -                | 1 (1.000) |    22.24 | alex666, esenthial, headtr1ck, kensizor, npl |
|           33 |       88 | 2025-11-25 | PARIVISION        | W   | 1.000      | 0.143        | -                | 0.707 (0.101)    | 1 (1.000) |    11.71 | alex666, esenthial, headtr1ck, kensizor, npl |
|           32 |      106 | 2025-11-24 | The Huns          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.41 | alex666, esenthial, headtr1ck, kensizor, npl |
|           31 |      122 | 2025-11-24 | M80               | L   | 1.000      | -            | -                | -                | -         |   -22.91 | alex666, esenthial, headtr1ck, kensizor, npl |
|           30 |      836 | 2025-10-31 | Aurora            | L   | 0.991      | -            | -                | -                | -         |    -7.20 | alex666, esenthial, headtr1ck, kensizor, npl |
|           29 |      869 | 2025-10-29 | Legacy            | W   | 0.980      | 1.000        | 1.000 (0.980)    | 0.577 (0.565)    | 1 (0.980) |    23.47 | alex666, esenthial, headtr1ck, kensizor, npl |
|           28 |      901 | 2025-10-28 | paiN              | L   | 0.973      | -            | -                | -                | -         |   -14.11 | alex666, esenthial, headtr1ck, kensizor, npl |
|           27 |      933 | 2025-10-27 | 3DMAX             | W   | 0.967      | 1.000        | 0.521 (0.504)    | 0.493 (0.477)    | 1 (0.967) |    20.70 | alex666, esenthial, headtr1ck, kensizor, npl |
|           26 |      991 | 2025-10-26 | Astralis          | W   | 0.960      | 1.000        | 0.438 (0.420)    | 0.358 (0.344)    | 1 (0.960) |    18.77 | alex666, esenthial, headtr1ck, kensizor, npl |
|           25 |     1362 | 2025-10-15 | FaZe              | L   | 0.884      | -            | -                | -                | -         |   -10.22 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           24 |     1387 | 2025-10-14 | HEROIC            | L   | 0.878      | -            | -                | -                | -         |   -11.94 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           23 |     1859 | 2025-10-02 | FURIA             | L   | 0.801      | -            | -                | -                | -         |    -2.47 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     1914 | 2025-10-01 | GamerLegion       | L   | 0.792      | -            | -                | -                | -         |   -12.07 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     1950 | 2025-09-30 | G2                | W   | 0.786      | 0.769        | 0.438 (0.264)    | 0.415 (0.250)    | 1 (0.786) |    17.43 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     1994 | 2025-09-29 | HOTU              | L   | 0.778      | -            | -                | -                | -         |   -18.84 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     2021 | 2025-09-28 | Legacy            | W   | 0.773      | 0.769        | 1.000 (0.594)    | 0.577 (0.343)    | 1 (0.773) |    19.36 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     2268 | 2025-09-21 | Ninjas in Pyjamas | L   | 0.726      | -            | -                | -                | -         |   -17.22 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     2290 | 2025-09-20 | Gentle Mates      | W   | 0.720      | 0.769        | 0.182 (0.101)    | 0.665 (0.368)    | 1 (0.720) |    10.40 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     2300 | 2025-09-20 | Passion UA        | W   | 0.719      | 0.769        | 0.112 (0.062)    | 0.379 (0.210)    | 1 (0.719) |     6.69 | alex666, esenthial, headtr1ck, kensizor, npl |
|           15 |     2337 | 2025-09-19 | OG                | W   | 0.712      | 0.769        | 0.081 (0.045)    | 0.706 (0.386)    | -         |     5.83 | alex666, esenthial, headtr1ck, kensizor, npl |
|           14 |     2372 | 2025-09-18 | PARIVISION        | L   | 0.705      | -            | -                | -                | -         |   -14.91 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     2967 | 2025-08-30 | Lynn Vision       | L   | 0.578      | -            | -                | -                | -         |   -13.94 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     2974 | 2025-08-30 | Kaleido           | W   | 0.577      | -            | -                | -                | -         |     0.90 | alex666, esenthial, headtr1ck, kensizor, npl |
|           11 |     3012 | 2025-08-29 | TYLOO             | L   | 0.571      | -            | -                | -                | -         |   -14.98 | alex666, esenthial, headtr1ck, kensizor, npl |
|           10 |     3587 | 2025-08-10 | MOUZ              | L   | 0.446      | -            | -                | -                | -         |    -3.85 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     3669 | 2025-08-05 | FUT               | W   | 0.412      | 0.624        | 0.161 (0.042)    | 0.743 (0.191)    | -         |     5.52 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     3875 | 2025-07-24 | FlyQuest          | L   | 0.333      | -            | -                | -                | -         |    -8.34 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     3891 | 2025-07-23 | Astralis          | L   | 0.326      | -            | -                | -                | -         |    -4.05 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |     4574 | 2025-06-10 | Lynn Vision       | L   | 0.041      | -            | -                | -                | -         |    -1.05 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |     4589 | 2025-06-09 | FURIA             | L   | 0.034      | -            | -                | -                | -         |    -0.10 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     4605 | 2025-06-08 | HEROIC            | W   | 0.026      | -            | -                | -                | -         |     0.51 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     4621 | 2025-06-07 | Virtus.pro        | L   | 0.021      | -            | -                | -                | -         |    -0.65 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     4629 | 2025-06-07 | Falcons           | W   | 0.019      | -            | -                | -                | -         |     0.50 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     4662 | 2025-06-04 | Wildcard          | W   | 0.001      | -            | -                | -                | -         |     0.00 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($126,734.52)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-01 |      1.000 | $62,500.00     | $62,500.00      |
| 2025-10-19 |      0.912 | $5,000.00      | $4,558.14       |
| 2025-10-02 |      0.801 | $6,500.00      | $5,203.89       |
| 2025-09-21 |      0.727 | $70,000.00     | $50,869.05      |
| 2025-08-31 |      0.585 | $2,088.00      | $1,221.93       |
| 2025-08-10 |      0.447 | $2,500.00      | $1,117.03       |
| 2025-07-25 |      0.341 | $2,500.00      | $851.31         |
| 2025-06-10 |      0.041 | $10,000.00     | $413.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
