### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, SIXER, Tarkky<br />
Global Rank: [227](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [147]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  700.1<br />
<br />
Final Rank Value (700.1) = Starting Rank Value (705.4) + Head To Head Adjustments (-5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.4
- 400 + ( ( 0.156 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 705.4


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
|           20 |     3795 | 2025-12-21 | Sangal        | L   | 0.491      | -            | -                | -                | -         |    -3.55 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           19 |     3910 | 2025-12-13 | eLITenergy    | L   | 0.440      | -            | -                | -                | -         |    -6.86 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           18 |     4130 | 2025-12-01 | BASEMENT BOYS | L   | 0.361      | -            | -                | -                | -         |    -3.79 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           17 |     4191 | 2025-11-29 | HAVU          | W   | 0.347      | 0.384        | 0.005 (0.001)    | 0.569 (0.076)    | 0 (0.000) |     9.80 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           16 |     4245 | 2025-11-28 | Betclic       | W   | 0.338      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.53 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           15 |     4377 | 2025-11-22 | Fire Flux     | L   | 0.300      | -            | -                | -                | -         |    -4.04 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           14 |     4426 | 2025-11-21 | The Glecs     | W   | 0.292      | 0.344        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     2.19 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           13 |     4470 | 2025-11-20 | Leo           | L   | 0.285      | -            | -                | -                | -         |    -2.18 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           12 |     4719 | 2025-11-09 | BIG           | L   | 0.213      | -            | -                | -                | -         |    -3.04 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           11 |     4777 | 2025-11-08 | Wicked        | W   | 0.205      | 0.433        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.205) |     1.52 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|           10 |     4886 | 2025-11-07 | Deep Cross    | W   | 0.198      | 0.433        | 0.002 (0.000)    | 0.013 (0.001)    | 1 (0.198) |     2.40 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            9 |     5097 | 2025-10-30 | home          | L   | 0.145      | -            | -                | -                | -         |    -2.41 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            8 |     5115 | 2025-10-29 | Fire Flux     | L   | 0.139      | -            | -                | -                | -         |    -2.01 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            7 |     5143 | 2025-10-28 | home          | W   | 0.133      | 0.344        | 0.000 (0.000)    | 0.127 (0.006)    | 0 (0.000) |     1.95 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            6 |     5285 | 2025-10-25 | FORZE Reload  | L   | 0.114      | -            | -                | -                | -         |    -1.16 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            5 |     5359 | 2025-10-24 | AMKAL         | L   | 0.106      | -            | -                | -                | -         |    -1.98 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            4 |     5395 | 2025-10-23 | BIG           | L   | 0.100      | -            | -                | -                | -         |    -0.03 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            3 |     5429 | 2025-10-22 | MOLO          | W   | 0.093      | 0.383        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.61 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            2 |     5442 | 2025-10-21 | FUT           | W   | 0.086      | 0.383        | 0.330 (0.011)    | 0.467 (0.015)    | 0 (0.000) |     2.69 | devoduvek, drac, JACKZ, SIXER, Tarkky |
|            1 |     5447 | 2025-10-21 | GenOne        | W   | 0.086      | 0.383        | 0.017 (0.001)    | 0.540 (0.018)    | 0 (0.000) |     2.09 | devoduvek, drac, JACKZ, SIXER, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,190.14)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.213 | $15,000.00     | $3,190.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
