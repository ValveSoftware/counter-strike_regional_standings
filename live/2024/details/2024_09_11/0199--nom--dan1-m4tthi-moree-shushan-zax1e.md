### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, m4tthi, MOREE, shushan, Zax1e<br />
Global Rank: [199](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_11.md)<br />
Regional Rank: [25]( ../../standings_asia_2024_09_11.md)<br />
<br />
Final Rank Value:  569.8<br />
<br />
Final Rank Value (569.8) = Starting Rank Value (540.8) + Head To Head Adjustments (29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.8
- 400 + ( ( 0.072 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 540.8


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
|           15 |      328 | 2024-08-30 | DRILLAS     | L   | 1.000      | -            | -                | -                | -         |   -17.30 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           14 |      362 | 2024-08-29 | Onyx Ravens | L   | 1.000      | -            | -                | -                | -         |   -21.61 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           13 |      412 | 2024-08-28 | Qiang       | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.149 (0.021)    | 0 (0.000) |    16.73 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           12 |      419 | 2024-08-28 | Al-Ittihad  | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.045 (0.006)    | 0 (0.000) |    15.74 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           11 |     1388 | 2024-08-01 | GUN5        | L   | 0.925      | -            | -                | -                | -         |    -4.15 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|           10 |     1504 | 2024-07-29 | 1WIN        | L   | 0.906      | -            | -                | -                | -         |    -3.20 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            9 |     1546 | 2024-07-28 | GUN5        | W   | 0.898      | 0.143        | 0.092 (0.012)    | 0.972 (0.125)    | 0 (0.000) |    24.41 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            8 |     3222 | 2024-05-18 | GUN5        | L   | 0.427      | -            | -                | -                | -         |    -1.15 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            7 |     3258 | 2024-05-17 | Rare Atom   | W   | 0.421      | 0.143        | 0.026 (0.002)    | 0.434 (0.026)    | 0 (0.000) |    11.04 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            6 |     3419 | 2024-05-14 | Heimo       | W   | 0.398      | 0.143        | 0.004 (0.000)    | 0.067 (0.004)    | 0 (0.000) |     8.15 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            5 |     3439 | 2024-05-13 | Rare Atom   | L   | 0.392      | -            | -                | -                | -         |    -1.86 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            4 |     3976 | 2024-04-19 | JANO        | L   | 0.233      | -            | -                | -                | -         |    -2.66 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            3 |     4029 | 2024-04-18 | RUBY        | L   | 0.226      | -            | -                | -                | -         |    -0.96 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            2 |     4065 | 2024-04-17 | Sampi       | W   | 0.219      | 0.143        | 0.032 (0.001)    | 1.000 (0.031)    | 0 (0.000) |     6.16 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            1 |     4421 | 2024-04-04 | KOI         | L   | 0.133      | -            | -                | -                | -         |    -0.39 | dan1, meztal, MOREE, shushan, tN1R   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
