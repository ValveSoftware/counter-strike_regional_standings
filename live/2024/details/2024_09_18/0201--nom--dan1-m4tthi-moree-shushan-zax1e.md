### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, m4tthi, MOREE, shushan, Zax1e<br />
Global Rank: [201](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_18.md)<br />
Regional Rank: [25]( ../../standings_asia_2024_09_18.md)<br />
<br />
Final Rank Value:  572.1<br />
<br />
Final Rank Value (572.1) = Starting Rank Value (541.4) + Head To Head Adjustments (30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.4
- 400 + ( ( 0.072 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 541.4


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
|           15 |      533 | 2024-08-30 | DRILLAS     | L   | 1.000      | -            | -                | -                | -         |   -17.30 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           14 |      567 | 2024-08-29 | Onyx Ravens | L   | 1.000      | -            | -                | -                | -         |   -21.62 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           13 |      617 | 2024-08-28 | Qiang       | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.151 (0.022)    | 0 (0.000) |    20.63 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           12 |      624 | 2024-08-28 | Al-Ittihad  | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.044 (0.006)    | 0 (0.000) |    15.65 | dan1, m4tthi, MOREE, shushan, Zax1e  |
|           11 |     1593 | 2024-08-01 | GUN5        | L   | 0.879      | -            | -                | -                | -         |    -3.55 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|           10 |     1709 | 2024-07-29 | 1WIN        | L   | 0.860      | -            | -                | -                | -         |    -3.02 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            9 |     1751 | 2024-07-28 | GUN5        | W   | 0.852      | 0.143        | 0.101 (0.012)    | 0.984 (0.120)    | 0 (0.000) |    23.56 | dan1, m4tthi, MOREE, suraniZ, Zax1e  |
|            8 |     3427 | 2024-05-18 | GUN5        | L   | 0.381      | -            | -                | -                | -         |    -0.94 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            7 |     3463 | 2024-05-17 | Rare Atom   | W   | 0.375      | 0.143        | 0.027 (0.001)    | 0.417 (0.022)    | 0 (0.000) |     9.89 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            6 |     3624 | 2024-05-14 | Heimo       | W   | 0.352      | 0.143        | 0.003 (0.000)    | 0.062 (0.003)    | 0 (0.000) |     7.18 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            5 |     3644 | 2024-05-13 | Rare Atom   | L   | 0.346      | -            | -                | -                | -         |    -1.62 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            4 |     4181 | 2024-04-19 | JANO        | L   | 0.187      | -            | -                | -                | -         |    -2.17 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            3 |     4234 | 2024-04-18 | RUBY        | L   | 0.180      | -            | -                | -                | -         |    -0.75 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            2 |     4270 | 2024-04-17 | Sampi       | W   | 0.173      | 0.143        | 0.036 (0.001)    | 1.000 (0.025)    | 0 (0.000) |     4.95 | dan1, hotd0g , m4tthi, meztal, MOREE |
|            1 |     4626 | 2024-04-04 | KOI         | L   | 0.087      | -            | -                | -                | -         |    -0.26 | dan1, meztal, MOREE, shushan, tN1R   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
