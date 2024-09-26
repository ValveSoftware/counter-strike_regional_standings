### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, m4tthi, MOREE, shushan, Zax1e<br />
Global Rank: [204](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_26.md)<br />
Regional Rank: [25]( ../../standings_asia_2024_09_26.md)<br />
<br />
Final Rank Value:  560.4<br />
<br />
Final Rank Value (560.4) = Starting Rank Value (530.9) + Head To Head Adjustments (29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.9
- 400 + ( ( 0.069 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 530.9


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
|           15 |      823 | 2024-08-30 | DRILLAS     | L   | 1.000      | -            | -                | -                | -         |   -13.59 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           14 |      857 | 2024-08-29 | Onyx Ravens | L   | 1.000      | -            | -                | -                | -         |   -21.09 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           13 |      907 | 2024-08-28 | Qiang       | W   | 1.000      | 0.143        | 0.023 (0.003)    | 0.149 (0.021)    | 0 (0.000) |    20.63 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           12 |      914 | 2024-08-28 | Al-Ittihad  | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.040 (0.006)    | 0 (0.000) |    15.73 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           11 |     1883 | 2024-08-01 | GUN5        | L   | 0.825      | -            | -                | -                | -         |    -3.62 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|           10 |     1999 | 2024-07-29 | 1WIN        | L   | 0.806      | -            | -                | -                | -         |    -3.26 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            9 |     2041 | 2024-07-28 | GUN5        | W   | 0.799      | 0.143        | 0.079 (0.009)    | 0.990 (0.113)    | 0 (0.000) |    21.79 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            8 |     3717 | 2024-05-18 | GUN5        | L   | 0.327      | -            | -                | -                | -         |    -0.97 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            7 |     3753 | 2024-05-17 | Rare Atom   | W   | 0.321      | 0.143        | 0.022 (0.001)    | 0.394 (0.018)    | 0 (0.000) |     8.29 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            6 |     3914 | 2024-05-14 | Heimo       | W   | 0.298      | 0.143        | 0.002 (0.000)    | 0.054 (0.002)    | 0 (0.000) |     5.97 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            5 |     3934 | 2024-05-13 | Rare Atom   | L   | 0.292      | -            | -                | -                | -         |    -1.54 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            4 |     4471 | 2024-04-19 | JANO        | L   | 0.133      | -            | -                | -                | -         |    -1.61 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            3 |     4524 | 2024-04-18 | RUBY        | L   | 0.126      | -            | -                | -                | -         |    -0.60 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            2 |     4560 | 2024-04-17 | Sampi       | W   | 0.119      | 0.143        | 0.032 (0.001)    | 0.942 (0.016)    | 0 (0.000) |     3.46 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            1 |     4916 | 2024-04-04 | KOI         | L   | 0.033      | -            | -                | -                | -         |    -0.12 | dan1, meztal, MOREE, shushan, tN1R   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
