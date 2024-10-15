### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [80](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [4]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  899.3<br />
<br />
Final Rank Value (899.3) = Starting Rank Value (865.3) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.232[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.3
- 400 + ( ( 0.239 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 865.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1411 | 2024-08-29 | Rare Atom         | L   | 0.886      | -            | -                | -                | -         |   -15.67 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           18 |     1482 | 2024-08-28 | Rare Atom         | W   | 0.879      | 0.143        | 0.020 (0.003)    | 0.278 (0.035)    | 0 (0.000) |    12.03 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           17 |     1536 | 2024-08-27 | Teamwork          | W   | 0.872      | 0.143        | 0.000 (0.000)    | 0.117 (0.015)    | 0 (0.000) |     1.88 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           16 |     1543 | 2024-08-27 | Steel Helmet      | W   | 0.871      | -            | -                | -                | 0 (0.000) |     1.49 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           15 |     2254 | 2024-08-06 | Chinggis Warriors | W   | 0.733      | 0.380        | 0.010 (0.003)    | 0.147 (0.041)    | 1 (0.733) |     9.79 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           14 |     2278 | 2024-08-05 | Rare Atom         | W   | 0.726      | 0.380        | 0.020 (0.006)    | 0.278 (0.077)    | 1 (0.726) |    10.93 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           13 |     2314 | 2024-08-04 | Gaimin Gladiators | W   | 0.720      | 0.380        | 0.018 (0.005)    | 0.586 (0.160)    | 1 (0.720) |    11.59 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     2383 | 2024-08-02 | Rare Atom         | L   | 0.707      | -            | -                | -                | -         |   -11.53 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|           11 |     2425 | 2024-08-01 | Rare Atom         | W   | 0.700      | 0.143        | 0.020 (0.002)    | 0.278 (0.028)    | 0 (0.000) |    10.36 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|           10 |     2432 | 2024-08-01 | CatEvil           | W   | 0.699      | 0.143        | -                | 0.158 (0.016)    | 0 (0.000) |     3.93 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            9 |     3124 | 2024-07-13 | Rare Atom         | L   | 0.574      | -            | -                | -                | -         |   -10.34 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            8 |     3126 | 2024-07-13 | CatEvil           | W   | 0.573      | 0.143        | -                | 0.158 (0.013)    | 0 (0.000) |     2.79 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            7 |     3138 | 2024-07-12 | Chinggis Warriors | W   | 0.566      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |     8.50 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            6 |     3141 | 2024-07-12 | Alter Ego         | W   | 0.565      | 0.143        | -                | 0.215 (0.017)    | -         |     2.27 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            5 |     3608 | 2024-06-08 | Lynn Vision       | L   | 0.340      | -            | -                | -                | -         |    -5.60 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            4 |     3662 | 2024-06-07 | GR                | W   | 0.333      | 0.416        | 0.003 (0.000)    | 0.127 (0.018)    | -         |     2.56 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            3 |     3731 | 2024-06-06 | The QUBE          | W   | 0.326      | 0.416        | 0.002 (0.000)    | -                | -         |     2.18 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            2 |     3784 | 2024-06-05 | Lynn Vision       | L   | 0.320      | -            | -                | -                | -         |    -5.25 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            1 |     3830 | 2024-06-04 | SGGT              | W   | 0.313      | 0.416        | 0.001 (0.000)    | -                | -         |     2.08 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,816.93)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      0.733 | $13,755.00     | $10,083.31      |
| 2024-06-09 |      0.347 | $5,000.00      | $1,733.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
