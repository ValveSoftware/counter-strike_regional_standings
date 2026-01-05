### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, SIXER, Tarkky<br />
Global Rank: [135](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [93]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  841.4<br />
<br />
Final Rank Value (841.4) = Starting Rank Value (893.4) + Head To Head Adjustments (-52.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.185[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.4
- 400 + ( ( 0.249 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 893.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      115 | 2025-12-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -4.36 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           37 |      230 | 2025-12-13 | eLITenergy        | L   | 1.000      | -            | -                | -                | -         |   -22.79 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           36 |      450 | 2025-12-01 | BASEMENT BOYS     | L   | 0.968      | -            | -                | -                | -         |   -15.98 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           35 |      511 | 2025-11-29 | HAVU              | W   | 0.953      | 0.384        | 0.011 (0.004)    | 0.331 (0.121)    | 0 (0.000) |    15.74 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           34 |      565 | 2025-11-28 | Betclic           | W   | 0.944      | 0.384        | 0.002 (0.001)    | 0.297 (0.108)    | 0 (0.000) |    13.43 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           33 |      697 | 2025-11-22 | Fire Flux         | L   | 0.906      | -            | -                | -                | -         |   -10.75 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           32 |      746 | 2025-11-21 | The Glecs         | W   | 0.898      | 0.344        | -                | 0.137 (0.042)    | 0 (0.000) |     4.91 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           31 |      790 | 2025-11-20 | Leo               | L   | 0.892      | -            | -                | -                | -         |   -10.09 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           30 |     1039 | 2025-11-09 | BIG               | L   | 0.819      | -            | -                | -                | -         |    -1.77 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           29 |     1097 | 2025-11-08 | Wicked            | W   | 0.812      | 0.433        | 0.001 (0.000)    | -                | 1 (0.812) |     2.94 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           28 |     1206 | 2025-11-07 | Deep Cross        | W   | 0.804      | 0.433        | 0.008 (0.003)    | 0.067 (0.023)    | 1 (0.804) |     8.13 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           27 |     1417 | 2025-10-30 | AaB               | L   | 0.752      | -            | -                | -                | -         |   -13.97 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           26 |     1435 | 2025-10-29 | Fire Flux         | L   | 0.746      | -            | -                | -                | -         |   -11.13 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           25 |     1463 | 2025-10-28 | AaB               | W   | 0.739      | 0.344        | 0.001 (0.000)    | 0.207 (0.053)    | 0 (0.000) |     8.36 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           24 |     1605 | 2025-10-25 | FORZE Reload      | L   | 0.720      | -            | -                | -                | -         |   -12.06 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           23 |     1679 | 2025-10-24 | AMKAL             | L   | 0.713      | -            | -                | -                | -         |   -11.78 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           22 |     1715 | 2025-10-23 | BIG               | L   | 0.707      | -            | -                | -                | -         |    -1.92 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           21 |     1749 | 2025-10-22 | MOLO              | W   | 0.699      | -            | -                | -                | 0 (0.000) |     2.65 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           20 |     1762 | 2025-10-21 | FUT               | W   | 0.693      | 0.383        | 0.214 (0.057)    | 0.717 (0.190)    | 0 (0.000) |    21.30 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           19 |     1767 | 2025-10-21 | GenOne            | W   | 0.692      | 0.383        | 0.012 (0.003)    | 0.511 (0.135)    | -         |    16.76 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           18 |     2255 | 2025-10-06 | Tricked           | L   | 0.592      | -            | -                | -                | -         |   -11.94 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           17 |     2343 | 2025-10-04 | ex-Zero Tenacity  | L   | 0.581      | -            | -                | -                | -         |    -6.36 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           16 |     2441 | 2025-10-02 | SENZA             | W   | 0.565      | -            | -                | -                | -         |     3.54 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|           15 |     2476 | 2025-10-01 | Friendly Campers  | L   | 0.559      | -            | -                | -                | -         |    -0.78 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|           14 |     2503 | 2025-09-30 | KHAN              | L   | 0.553      | -            | -                | -                | -         |   -10.96 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|           13 |     2539 | 2025-09-29 | Leo               | W   | 0.547      | 0.384        | 0.011 (0.002)    | 0.506 (0.106)    | -         |     8.63 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|           12 |     2568 | 2025-09-28 | ALGO              | W   | 0.541      | 0.384        | 0.005 (0.001)    | 0.245 (0.051)    | -         |    10.61 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|           11 |     2643 | 2025-09-27 | ARCRED            | W   | 0.533      | 0.384        | 0.009 (0.002)    | 0.736 (0.151)    | -         |     9.32 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|           10 |     2684 | 2025-09-26 | ALGO              | L   | 0.526      | -            | -                | -                | -         |    -5.78 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            9 |     2926 | 2025-09-18 | KHAN              | L   | 0.473      | -            | -                | -                | -         |    -9.83 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|            8 |     3041 | 2025-09-14 | Square Sausages   | W   | 0.447      | -            | -                | -                | -         |     0.91 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|            7 |     3113 | 2025-09-13 | ex-HEROIC Academy | W   | 0.439      | -            | -                | -                | -         |     1.84 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|            6 |     3446 | 2025-09-04 | AaB               | L   | 0.380      | -            | -                | -                | -         |    -7.25 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|            5 |     3500 | 2025-08-31 | kONO              | L   | 0.351      | -            | -                | -                | -         |    -6.78 | devoduvek, drac, JACKZ, SIXER, Tarkky   |
|            4 |     3626 | 2025-08-27 | 1win              | L   | 0.325      | -            | -                | -                | -         |    -4.98 | devoduvek, Djoko, drac, JACKZ, SIXER    |
|            3 |     4491 | 2025-07-19 | Alliance          | L   | 0.067      | -            | -                | -                | -         |    -0.14 | devoduvek, drac, JACKZ, misutaaa, SIXER |
|            2 |     4504 | 2025-07-19 | dag love fatties  | W   | 0.066      | -            | -                | -                | 1 (0.066) |     0.20 | devoduvek, drac, JACKZ, misutaaa, SIXER |
|            1 |     4508 | 2025-07-19 | Glitchtech        | W   | 0.065      | -            | -                | -                | 1 (0.065) |     0.12 | devoduvek, drac, JACKZ, misutaaa, SIXER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,293.50)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.819 | $15,000.00     | $12,286.09      |
| 2025-07-20 |      0.073 | $102.00        | $7.41           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
