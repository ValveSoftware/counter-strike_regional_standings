### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, m4tthi, MOREE, shushan, Zax1e<br />
Global Rank: [199](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_04.md)<br />
Regional Rank: [25]( ../../standings_asia_2024_09_04.md)<br />
<br />
Final Rank Value:  575.6<br />
<br />
Final Rank Value (575.6) = Starting Rank Value (543.9) + Head To Head Adjustments (31.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.9
- 400 + ( ( 0.073 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 543.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      123 | 2024-08-30 | DRILLAS     | L   | 1.000      | -            | -                | -                | -         |   -17.43 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           14 |      157 | 2024-08-29 | Onyx Ravens | L   | 1.000      | -            | -                | -                | -         |   -21.82 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           13 |      207 | 2024-08-28 | JiJieHao    | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.114 (0.016)    | 0 (0.000) |    16.08 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           12 |      214 | 2024-08-28 | Al-Ittihad  | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.047 (0.007)    | 0 (0.000) |    15.79 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           11 |     1183 | 2024-08-01 | GUN5        | L   | 0.972      | -            | -                | -                | -         |    -4.46 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|           10 |     1299 | 2024-07-29 | 1WIN        | L   | 0.952      | -            | -                | -                | -         |    -3.09 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            9 |     1341 | 2024-07-28 | GUN5        | W   | 0.945      | 0.143        | 0.090 (0.012)    | 0.828 (0.112)    | 0 (0.000) |    25.56 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            8 |     3017 | 2024-05-18 | GUN5        | L   | 0.474      | -            | -                | -                | -         |    -1.31 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            7 |     3053 | 2024-05-17 | Rare Atom   | W   | 0.468      | 0.143        | 0.025 (0.002)    | 0.463 (0.031)    | 0 (0.000) |    12.38 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            6 |     3214 | 2024-05-14 | Heimo       | W   | 0.445      | 0.143        | 0.004 (0.000)    | 0.076 (0.005)    | 0 (0.000) |     9.21 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            5 |     3234 | 2024-05-13 | Rare Atom   | L   | 0.439      | -            | -                | -                | -         |    -1.96 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            4 |     3771 | 2024-04-19 | JANO        | L   | 0.280      | -            | -                | -                | -         |    -3.16 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            3 |     3824 | 2024-04-18 | RUBY        | L   | 0.273      | -            | -                | -                | -         |    -1.10 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            2 |     3860 | 2024-04-17 | Sampi       | W   | 0.266      | 0.143        | 0.033 (0.001)    | 1.000 (0.038)    | 0 (0.000) |     7.48 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            1 |     4216 | 2024-04-04 | KOI         | L   | 0.180      | -            | -                | -                | -         |    -0.49 | dan1, meztal, MOREE, shushan, tN1R   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
